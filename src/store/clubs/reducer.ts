import { createReducer } from 'typesafe-actions';
import { ClubsState, ClubsAction} from './types';
import { GET_CLUBS_DATA, GET_CLUBS_DATA_SUCCESS, GET_CLUBS_DATA_ERROR } from './actions';

const initialState: ClubsState = {
    clubData: {
        loading: false,
        error: null,
        data: null
    }
};

const clubs = createReducer<ClubsState, ClubsAction>(initialState, {
    [GET_CLUBS_DATA]: state => ({
        ...state,
        clubData:{
            loading: true,
            error: null,
            data: null,
        }
    }),
    [GET_CLUBS_DATA_SUCCESS]: (state, action) => ({
        ...state,
        clubData: {
            loading: false,
            error: null,
            data: action.payload,
        }
    }),
    [GET_CLUBS_DATA_ERROR]: (state, action) => ({
        ...state,
        clubData: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
});

export default clubs;