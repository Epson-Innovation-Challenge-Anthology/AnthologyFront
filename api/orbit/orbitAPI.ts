import axios from "@/api/clientAxios";
import exp from "constants";

export const getFriends = async () => {
    const response = await axios.get("/api/orbit");
    const data: GetFriendsResponse[] = response.data.data;
    return data;
}

export const updateDistane = async (param: UpdateDistanceParam) => {
    await axios.put(`/api/orbit/${param.userId}/distance/${param.distance}`);
}

export const updateActivity = async (requestWithId: UpdateActivityRequestWithId) => {
    const request: UpdateActivityRequest = {
        title: requestWithId.title,
        image_url: requestWithId.image_url,
    }
    await axios.put(`/api/orbit/${requestWithId.userId}/foot-print`, request);
}