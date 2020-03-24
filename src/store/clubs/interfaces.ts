export interface IClub {
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

export interface IClubListOption {
    page: number;
    items_per_page: number;
    keyword: string;
    category: string;
}
