import { createAsyncAction } from 'typesafe-actions';
import { Clubs } from '../../api';
import { AxiosError } from 'axios';

export const GET_CLUBS_DATA = 'clubs/GET_CLUBS_DATA';
export const GET_CLUBS_DATA_SUCCESS = 'clubs/GET_CLUBS_DATA_SUCCESS';
export const GET_CLUBS_DATA_ERROR = 'clubs/GET_CLUBS_DATA_ERROR';

export const getClubsAsync = createAsyncAction(
    GET_CLUBS_DATA,
    GET_CLUBS_DATA_SUCCESS,
    GET_CLUBS_DATA_ERROR,
)<Promise<void>, Clubs[], AxiosError>();