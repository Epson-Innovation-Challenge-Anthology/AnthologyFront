import axios from "@/api/clientAxios";

export const singinGoogle = async (request: GoogleLoginRequest) => {
    const response = await axios.post("/auth/google/token/signin", request);
    const data: GoogleLoginResponse = response.data.data;
    return data;
}

export const signinLocal = async (request: LocalSigninRequest) => {
    const response = await axios({
        method: "POST",
        url: "/auth/basic/signin",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: request,
    });
    const data: LocalSigninResponse = response.data.data;
    return data;
}

export const signupLocal = async (request: LocalSignupRequest) => {
    await axios.post("/auth/basic/signup", request);
}