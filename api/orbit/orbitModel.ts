type GetFriendsResponse = {
    distance: string;
    user_id: string;
    user_profile_image: string;
    friend_name: string;
    updated_at: string;
    foot_prints: FootPrint[];
}

type FootPrint = {
    id: string;
    title: string;
    image_url: string;
    updated_at: string;
}

type UpdateDistanceParam = {
    userId: string
    distance: string
}

type UpdateActivityRequest = {
    title: string
    image_url: string
}

type UpdateActivityRequestWithId = UpdateActivityRequest & { userId: string };