import { ClubsAPI } from '../../db/';
import { getClubsListAsync } from './actions';
import createAsyncThunk from '../lib/createAsyncThunk';

const getClubsListThunk = createAsyncThunk(getClubsListAsync, ClubsAPI.getList);

export {
    getClubsListThunk
};