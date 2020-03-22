import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Post } from '../../api';
import { AsyncState } from '../../lib/reducerUtils';
export type PostAction = ActionType<typeof actions>;

export type PostState = {
    postData: AsyncState<Post, Error>;
}















// export type ClubsAction = ActionType<typeof actions>;

// export type ClubsState = {
//     clubData: {
//         loading: boolean;
//         error: Error | null;
//         data: Clubs[] | null;
//     };
// };