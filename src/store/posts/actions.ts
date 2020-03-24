import { createAsyncAction } from 'typesafe-actions';
import { IPost } from './interfaces';
import { AxiosError } from 'axios';

export const POST_POST_DATA = 'posts/POST_CLUB_DATA';
export const POST_POST_DATA_SUCCESS = 'posts/POST_CLUB_DATA_SUCCESS';
export const POST_POST_DATA_ERROR = 'posts/POST_CLUB_DATA_ERROR';

export const postPostAsync = createAsyncAction(
    POST_POST_DATA,
    POST_POST_DATA_SUCCESS,
    POST_POST_DATA_ERROR,
)<Promise<void>, IPost, AxiosError>();

// 포스트 리스트 모두 가져오기
export const GET_POST_LIST_DATA = 'posts/GET_POST_LIST_DATA';
export const GET_POST_LIST_DATA_SUCCESS = 'posts/GET_POST_LIST_DATA_SUCCESS';
export const GET_POST_LIST_DATA_ERROR = 'posts/GET_POST_LIST_DATA_ERROR';

export const getPostListAsync = createAsyncAction(
    GET_POST_LIST_DATA,
    GET_POST_LIST_DATA_SUCCESS,
    GET_POST_LIST_DATA_ERROR,
)<Promise<void>, IPost[], AxiosError>();


