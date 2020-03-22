import { combineReducers} from 'redux';
import clubs from './clubs';
import post from './posts';

const rootReducer = combineReducers({
    clubs,
    post
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;