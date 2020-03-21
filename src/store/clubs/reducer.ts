import { createReducer } from 'typesafe-actions';
import { ClubsState, ClubsAction} from './types';
import { getClubsAsync } from './actions';
import { asyncState, createAsyncReducer, transformToArray } from '../../lib/reducerUtils';

const initialState: ClubsState = {
    clubData: asyncState.initial()
};


const clubs = createReducer<ClubsState, ClubsAction>(initialState).handleAction(
    transformToArray(getClubsAsync),
    createAsyncReducer(getClubsAsync, 'clubData')
);

export default clubs;








// const clubs = createReducer<ClubsState, ClubsAction>(initialState, {
//     [GET_CLUBS_DATA]: state => ({
//         ...state,
//         clubData:asyncState.load()
//     }),
//     [GET_CLUBS_DATA_SUCCESS]: (state, action) => ({
//         ...state,
//         clubData: asyncState.success(action.payload)
//     }),
//     [GET_CLUBS_DATA_ERROR]: (state, action) => ({
//         ...state,
//         clubData: asyncState.error(action.payload)
//     })
// });