import axios from "@/api/clientAxios";

export const getProfile = async () => {
    const response = await axios.get("/api/users/me");
    const data: MyInfoResponse = response.data.data;
    return data;
}

export const updateProfile = async (request: UpdateProfileRequest) => {
    await axios.patch("/api/users/me", request);
}

export const updateProfileImage = async (request: updateProfileImageRequest) => {
    await axios.patch("/api/users/me/profile-image", request);
}
