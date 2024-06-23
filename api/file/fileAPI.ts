import axios from "@/api/clientAxios";

export const uploadFile = async (file: File) => {
    const response = await axios({
        method: "POST",
        url: "/api/resources/picture",
        data: { file },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    return response.data.data;
} 