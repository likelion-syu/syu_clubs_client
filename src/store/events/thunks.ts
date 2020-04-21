import { EventsAPI } from '../../db/';
import { getEventsAsync } from './actions';
import createAsyncThunk from '../lib/createAsyncThunk';

const getEventsThunk = createAsyncThunk(getEventsAsync, EventsAPI.getEvent);

export {
    getEventsThunk
};