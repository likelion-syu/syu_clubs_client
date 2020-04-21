import { combineReducers} from 'redux';
import clubs from './clubs';
import post from './posts';
import events from './events';

const rootReducer = combineReducers({
    clubs,
    post,
    events,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;