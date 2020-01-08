import { combineReducers } from 'redux';
import TeamReducer from './Components/Team/Reducer';
import HomeReducer from './Components/Home/reducer';

export default combineReducers({
    TeamReducer,
    HomeReducer
});