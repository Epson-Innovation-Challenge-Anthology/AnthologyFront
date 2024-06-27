"use client";

import {
  getFriends,
  updateActivity,
  updateDistane,
} from "@/api/orbit/orbitAPI";
import { QUERY_KEY } from "@/constant/queryKey";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import Portal from "@/components/portal/Portal";

export default function Friend() {
  const [userInfo, setUserInfo] = useState<GetFriendsResponse[]>([]);

  const queryClient = useQueryClient();

  const { data: responseData, isLoading } = useQuery({
    queryKey: [QUERY_KEY.Friends],
    queryFn: getFriends,
  });

  const { mutate: updateDistanceMutate, isPending: updateDistancePending } =
    useMutation({
      mutationFn: updateDistane,
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    });

  const { mutate: updateActivityMutate, isPending: updateActivityPending } =
    useMutation({
      mutationFn: updateActivity,
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    });

  useEffect(() => {
    if (responseData) {
      setUserInfo(responseData);
    }
  }, [responseData]);

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    userId: string
  ) => {
    const newUserInfo = [...userInfo];
    newUserInfo.map((user) => {
      if (user.user_id === userId) {
        user.distance = e.target.value;
      }
      return user;
    });
    setUserInfo(newUserInfo);
  };

  const handleChangeTitle = (
    e: React.ChangeEvent<HTMLInputElement>,
    userId: string
  ) => {
    const index = userInfo.findIndex((user) => user.user_id === userId);
    if (index === -1) return;

    const newUser = { ...userInfo[index] };
    if (newUser.foot_prints.length > 0) {
      newUser.foot_prints[0].title = e.target.value;
    } else {
      newUser.foot_prints.push({
        id: "",
        title: e.target.value,
        image_url: "",
        updated_at: "",
      });
    }
    setUserInfo([
      ...userInfo.slice(0, index),
      newUser,
      ...userInfo.slice(index + 1),
    ]);
  };

  const saveHandler = (userId: string) => {
    const user = userInfo.find((user) => user.user_id === userId);
    if (!user) return;

    const updateFriendParam: UpdateDistanceParam = {
      userId,
      distance: user.distance,
    };

    const updateFriendRequest: UpdateActivityRequestWithId = {
      userId,
      title: user.foot_prints[0].title,
      image_url: user.foot_prints[0].image_url,
    };

    updateDistanceMutate(updateFriendParam);
    updateActivityMutate(updateFriendRequest);
  };

  if (isLoading || updateDistancePending || updateActivityPending) {
    return (
      <Portal selector="loading">
        <LoadingSpinner />
      </Portal>
    );
  }

  return (
    <main className="pt-[107px] pb-[84px] flex flex-col items-center bg-[#8692FF]">
      <table className="table w-[1061px]">
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Date</th>
            <th>Owner</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((user) => (
            <tr key={user.user_id}>
              <td>
                <input
                  type="text"
                  className="input bg-[#8692FF] w-[120px] input-bordered"
                  defaultValue={
                    user.foot_prints.length > 0 ? user.foot_prints[0].title : ""
                  }
                  onChange={(e) => handleChangeTitle(e, user.user_id)}
                />
              </td>
              <td>
                <select
                  className="select select-bordered select-box w-[120px] h-[28px]"
                  defaultValue={user.distance}
                  onChange={(e) => handleSelectChange(e, user.user_id)}
                >
                  <option value="closer">closer</option>
                  <option value="high">high</option>
                  <option value="medium">medium</option>
                  <option value="low">low</option>
                </select>
              </td>
              <td>{dayjs(user.updated_at).format("MMM D")}</td>
              <td>
                <div className="relative w-[36px] h-[36px]">
                  <Image
                    src={user.user_profile_image}
                    layout="fill"
                    className="rounded-full object-fill"
                    alt="친구 이미지"
                  ></Image>
                </div>
              </td>
              <td>
                <button
                  className="btn btn-active text-[#8600EF] bg-[#FF7D7D] border-0"
                  onClick={() => saveHandler(user.user_id)}
                >
                  수정하기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
