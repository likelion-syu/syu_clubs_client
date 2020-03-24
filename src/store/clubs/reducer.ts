import { createReducer } from 'typesafe-actions';
import { ClubsListState, ClubsAction } from './types';
import { getClubsListAsync } from './actions';
import {
    asyncState,
    createAsyncReducer,
    transformToArray,
} from '../lib/reducerUtils';
import { combineReducers } from 'redux';

const ClubList = createReducer<ClubsListState, ClubsAction>({
    list: asyncState.initial(),
}).handleAction(
    transformToArray(getClubsListAsync),
    createAsyncReducer(getClubsListAsync, "list"),
);

export default combineReducers({
    ClubList
});
