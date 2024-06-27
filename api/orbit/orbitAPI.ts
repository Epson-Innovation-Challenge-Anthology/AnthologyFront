import axios from "@/api/clientAxios";

export const getFriends = async () => {
    const response = await axios.get("/api/orbit");
    const data: GetFriendsResponse[] = response.data.data;
    return data;
}