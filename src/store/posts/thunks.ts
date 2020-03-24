import { postPost } from '../../api';
import { PostsAPI } from '../../db';
import { postPostAsync, getPostListAsync } from './actions';
import createAsyncThunk from '../lib/createAsyncThunk';

export const postPostThunk = createAsyncThunk(postPostAsync, postPost);
export const getPostListThunk = createAsyncThunk(getPostListAsync,PostsAPI.getPostsList);