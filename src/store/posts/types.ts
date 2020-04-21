import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

import { IPost } from './interfaces';
import { AsyncState } from '../lib/reducerUtils';
export type PostAction = ActionType<typeof actions>;

export type PostState = {
    dispatch: AsyncState<IPost, Error>;
}

export type PostListState = {
    list: AsyncState<IPost,Error>;
}