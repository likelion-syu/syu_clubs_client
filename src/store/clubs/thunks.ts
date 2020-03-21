import { getClubs } from '../../api';
import { getClubsAsync } from './actions';
import createAsyncThunk from '../../lib/createAsyncThunk';

export const getClubsThunk = createAsyncThunk(getClubsAsync, getClubs);













//리팩토링 전 코드

// import { ThunkAction } from 'redux-thunk';
// import { RootState } from '..';
// import { ClubsAction } from './types';
// import { getClubs } from '../../api';
// import { getClubsData, getClubsDataSuccess, getClubsDataError} from './actions';

// export function getClubsThunk(): ThunkAction<Promise<void>, RootState, null, ClubsAction> {
//     return async dispatch => {
//         dispatch(getClubsData());
//         try{
//             const clubsData = await getClubs();
//             dispatch(getClubsDataSuccess(clubsData));
//         } catch (e) {
//             dispatch(getClubsDataError(e));
//         }
//     };
// }