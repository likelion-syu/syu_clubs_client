import { createAction } from 'typesafe-actions';
import { Clubs } from '../../api';
import { AxiosError } from 'axios';

export const GET_CLUBS_DATA = 'clubs/GET_CLUBS_DATA';
export const GET_CLUBS_DATA_SUCCESS = 'clubs/GET_CLUBS_DATA_SUCCESS';
export const GET_CLUBS_DATA_ERROR = 'clubs/GET_CLUBS_DATA_ERROR';

export const getClubsData = createAction(GET_CLUBS_DATA)();
export const getClubsDataSuccess = createAction(GET_CLUBS_DATA_SUCCESS)<Clubs>();
export const getClubsDataError = createAction(GET_CLUBS_DATA_ERROR)<AxiosError>();