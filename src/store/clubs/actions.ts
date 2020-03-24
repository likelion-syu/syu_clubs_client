import { createAsyncAction } from 'typesafe-actions';

import { IClub } from './interfaces';
import { AxiosError } from 'axios';

// 동아리 리스트 가져오기 
export const GET_CLUBS_LIST_DATA = 'clubs/GET_CLUBS_LIST_DATA';
export const GET_CLUBS_LIST_DATA_SUCCESS = 'clubs/GET_CLUBS_LIST_DATA_SUCCESS';
export const GET_CLUBS_LIST_DATA_ERROR = 'clubs/GET_CLUBS_LIST_DATA_ERROR';

export const getClubsListAsync = createAsyncAction(
    GET_CLUBS_LIST_DATA,
    GET_CLUBS_LIST_DATA_SUCCESS,
    GET_CLUBS_LIST_DATA_ERROR,
)<Promise<void>, IClub[], AxiosError>();
