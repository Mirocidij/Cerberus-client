import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { reducer as homeReducer } from '../../Features/Home/redux/reducer';

const reducerMap = {
    form: formReducer,
    homeData: homeReducer
};

export default combineReducers(reducerMap);