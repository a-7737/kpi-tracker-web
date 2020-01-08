import { combineReducers } from 'redux';
import TeamReducer from './Components/Team/Reducer';
import HomeReducer from './Components/Home/reducer';
import UserReducer from './Components/User/Reducer';

export default combineReducers({
    TeamReducer,
    HomeReducer,
    UserReducer
});