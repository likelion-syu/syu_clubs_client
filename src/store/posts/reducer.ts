import { createReducer } from 'typesafe-actions';
import { PostState, PostAction } from './types';
import { postPostAsync } from './actions';
import {
    asyncState,
    createAsyncReducer,
    transformToArray,
} from '../../lib/reducerUtils';

const initialState: PostState = {
    postData: asyncState.initial(),
};

const post = createReducer<PostState, PostAction>(initialState).handleAction(
    transformToArray(postPostAsync),
    createAsyncReducer(postPostAsync, 'postData'),
);

export default post;
