import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from 'axios';
import { IEvent } from "./interfaces";

// 어떤 동작을 하는지 선언해 줄 것

export const GET_EVENTS_LIST_DATA = 'events/GET_EVENTS_LIST_DATA';
export const GET_EVENTS_LIST_DATA_SUCCESS = 'events/GET_EVENTS_LIST_DATA_SUCCESS';
export const GET_EVENTS_LIST_DATA_ERROR = 'events/GET_EVENTS_LIST_DATA_ERROR';

export const getEventsAsync = createAsyncAction(
    GET_EVENTS_LIST_DATA,
    GET_EVENTS_LIST_DATA_SUCCESS,
    GET_EVENTS_LIST_DATA_ERROR,
)<Promise<void>, IEvent[], AxiosError>();