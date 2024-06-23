type FileUploadResponse = {
    user_id: string
    picture_id: string
    image_url: string
}

type UpdateProfileRequest = {
    id: string
    name: string
    service_email: string
    urls: string[]
}

type MyInfoResponse = {
    id: string
    name: string
    auth_provider: string
    email: string
    service_email: string
    is_active: boolean
    is_superuser: boolean
    created_at: string
    deactivated_at: string
    updated_at: string
    urls: string[]
    sex: string
    profile_image: string
    bio: string
    plan_expired_at: string
    using_plan: string
    auto_subscription: boolean
}

type updateProfileImageRequest = {
    profile_image: string
}