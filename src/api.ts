import axios from 'axios';

const host: string = 'http://127.0.0.1:8000';

export async function getClubs() {
    const response = await axios.get(host + '/api/clubs/');
    return response.data;
}

export interface Clubs {
    club_id: number;
    club_name: string;
    club_introduce: string;
    club_desc: string;
    club_img_url: string;
    created_at: Date;
    updated_at: Date;
    is_central: number;
    is_united: number;
    user: number;
    club_type: number;
}

export async function postPost(data: PostData) {
    const response = await axios.post(host + '/api/posts/', data, {
        headers: {
            'content-type': 'application/json',
        },
    });
    return response.data
}

export interface Post {
    post_id: number;
    post_title_img_url: null;
    created_at: null;
    updated_at: null;
    user: string;
    post_title: string;
    post_content: string;
    is_deleted: number;
    is_notice: number;
    category: number;
    club: number;
}

export interface PostData {
    post_title: string;
    post_content: string;
    is_deleted: number;
    is_notice: number;
    category: number;
    club: number;
    user: number;
}
