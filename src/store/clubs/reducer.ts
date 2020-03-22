import { createReducer } from 'typesafe-actions';
import { ClubsState, ClubsAction } from './types';
import { getClubsAsync } from './actions';
import {
    asyncState,
    createAsyncReducer,
    transformToArray,
} from '../../lib/reducerUtils';

const initialState: ClubsState = {
    clubData: asyncState.initial(),
};

const clubs = createReducer<ClubsState, ClubsAction>(initialState).handleAction(
    transformToArray(getClubsAsync),
    createAsyncReducer(getClubsAsync, 'clubData'),
);

export default clubs;
