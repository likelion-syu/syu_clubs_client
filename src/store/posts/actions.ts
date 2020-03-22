import { createAsyncAction } from 'typesafe-actions';
import { Post } from '../../api';
import { AxiosError } from 'axios';

export const POST_POST_DATA = 'posts/POST_CLUB_DATA';
export const POST_POST_DATA_SUCCESS = 'posts/POST_CLUB_DATA_SUCCESS';
export const POST_POST_DATA_ERROR = 'posts/POST_CLUB_DATA_ERROR';

export const postPostAsync = createAsyncAction(
    POST_POST_DATA,
    POST_POST_DATA_SUCCESS,
    POST_POST_DATA_ERROR,
)<Promise<void>, Post, AxiosError>();