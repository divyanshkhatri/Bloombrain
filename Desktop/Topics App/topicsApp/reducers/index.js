import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import DashboardReducer from './DashboardReducer';

export default combineReducers({
    Login: LoginReducer,
    Dashboard: DashboardReducer
});
