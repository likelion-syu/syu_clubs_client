import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Clubs } from '../../api';
import { AsyncState } from '../../lib/reducerUtils';
export type ClubsAction = ActionType<typeof actions>;

export type ClubsState = {
    clubData: AsyncState<Clubs[], Error>;
}















// export type ClubsAction = ActionType<typeof actions>;

// export type ClubsState = {
//     clubData: {
//         loading: boolean;
//         error: Error | null;
//         data: Clubs[] | null;
//     };
// };