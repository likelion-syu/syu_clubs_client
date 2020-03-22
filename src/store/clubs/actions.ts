import { createAsyncAction } from 'typesafe-actions';
import { Clubs } from '../../api';
import { AxiosError } from 'axios';

export const GET_CLUBS_DATA = 'clubs/GET_CLUBS_DATA';
export const GET_CLUBS_DATA_SUCCESS = 'clubs/GET_CLUBS_DATA_SUCCESS';
export const GET_CLUBS_DATA_ERROR = 'clubs/GET_CLUBS_DATA_ERROR';

export const POST_CLUB_DATA = 'clubs/POST_CLUB_DATA';
export const POST_CLUB_DATA_SUCCESS = 'clubs/POST_CLUB_DATA_SUCCESS';
export const POST_CLUB_DATA_ERROR = 'clubs/POST_CLUB_DATA_ERROR';

export const getClubsAsync = createAsyncAction(
    GET_CLUBS_DATA,
    GET_CLUBS_DATA_SUCCESS,
    GET_CLUBS_DATA_ERROR,
)<Promise<void>, Clubs[], AxiosError>();

export const postClubAsync = createAsyncAction(
    POST_CLUB_DATA,
    POST_CLUB_DATA_SUCCESS,
    POST_CLUB_DATA_ERROR,
)<Promise<void>, any, AxiosError>();