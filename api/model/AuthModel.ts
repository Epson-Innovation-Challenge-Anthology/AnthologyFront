type GoogleLoginRequest = {
    id_token: string
}

type GoogleLoginResponse = {
    access_token: string
    refresh_token: string
    date: string
    signup_complete: boolean
}

type LocalSignupRequest = {
    email: string
    name: string
    phone_number: string
    password: string
}

type LocalSigninRequest = {
    email: string
    password: string
}

type LocalSigninResponse = {
    access_token: string
    refresh_token: string
    date: string
    signup_complete: boolean
}

type RefreshTokenRequest = {
    grant_type: string
    refresh_token: string
}

type RefreshTokenResponse = {
    access_token: string
}