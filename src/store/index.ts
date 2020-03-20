import { combineReducers} from 'redux';
import clubs from './clubs';

const rootReducer = combineReducers({
    clubs
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;