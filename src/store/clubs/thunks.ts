import { getClubs } from '../../api';
import { getClubsAsync } from './actions';
import createAsyncThunk from '../../lib/createAsyncThunk';

export const getClubsThunk = createAsyncThunk(getClubsAsync, getClubs);
