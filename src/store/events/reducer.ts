import { createReducer } from 'typesafe-actions';
import { EventsState, EventsAction } from './types';
import { getEventsAsync } from './actions';
import {
    asyncState,
    createAsyncReducer,
    transformToArray,
} from '../lib/reducerUtils';
import { combineReducers } from 'redux';

const EventsList = createReducer<EventsState, EventsAction>({
    list: asyncState.initial(),
}).handleAction(
    transformToArray(getEventsAsync),
    createAsyncReducer(getEventsAsync, "list"),
);

export default combineReducers({
    get : EventsList
})