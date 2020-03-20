import axios from 'axios';

export async function getClubs() {
    const response = await axios.get('http://127.0.0.1:8000/api/clubs/');
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
