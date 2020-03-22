import { postPost } from '../../api';
import { postPostAsync } from './actions';
import createAsyncThunk from '../../lib/createAsyncThunk';

export const postPostThunk = createAsyncThunk(postPostAsync, postPost);
