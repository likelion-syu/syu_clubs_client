import { createReducer } from 'typesafe-actions';
import { PostState, PostAction, PostListState } from './types';
import { postPostAsync, getPostListAsync } from './actions';
import {
    asyncState,
    createAsyncReducer,
    transformToArray,
} from '../lib/reducerUtils';
import { combineReducers } from 'redux';

const PostReducer = createReducer<PostState, PostAction>({
    dispatch: asyncState.initial(),
}).handleAction(
    transformToArray(postPostAsync),
    createAsyncReducer(postPostAsync, 'dispatch'),
);

const PostList = createReducer<PostListState, PostAction>({
    list: asyncState.initial(),
}).handleAction(
    transformToArray(getPostListAsync),
    createAsyncReducer(getPostListAsync, 'list'),
);

export default combineReducers({
    post: PostReducer,
    get: PostList,
});
