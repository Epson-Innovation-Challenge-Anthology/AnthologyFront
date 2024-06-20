type GoogleLoginRequest = {
    id_token: string
}

type GoogleLoginResponse = {
    access_token: string
    refresh_token: string
    date: string
    signup_complete: boolean
}