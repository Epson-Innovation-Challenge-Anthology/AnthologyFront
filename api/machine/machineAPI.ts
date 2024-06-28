import axios from "@/api/clientAxios";

export const printPicture = async (formData: FormData) => {
    await axios({
        method: "POST",
        url: "/api/epson/print",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
}
