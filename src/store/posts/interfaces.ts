export interface IPost{
    post_id: number;
    post_title_img_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user: string;
    post_title: string;
    post_content: string;
    is_deleted: number;
    is_notice: number;
    category: number;
    club: string | null;
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