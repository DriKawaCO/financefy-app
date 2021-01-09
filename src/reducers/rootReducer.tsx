import AppReducer from './app.reducer';
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

const rootReducer = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        app: AppReducer,
    });

export default rootReducer;