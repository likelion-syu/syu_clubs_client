export interface IPost{
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

export interface IPostForm{
    post_title: string;
    post_content: string;
    is_deleted: number;
    is_notice: number;
    category: number;
    club: number;
    user: number;
}