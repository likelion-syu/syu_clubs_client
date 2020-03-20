import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { ClubsAction } from './types';
import { getClubs } from '../../api';
import { getClubsData, getClubsDataSuccess, getClubsDataError} from './actions';

export function getClubsThunk(id: string): ThunkAction<Promise<void>, RootState, null, ClubsAction> {
    return async dispatch => {
        dispatch(getClubsData());
        try{
            const clubsData = await getClubs(id);
            dispatch(getClubsDataSuccess(clubsData));
        } catch (e) {
            dispatch(getClubsDataError(e));
        }
    };
}