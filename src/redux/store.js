import { createStore, combineReducers } from 'redux';
import ProfileItemReducer from '../redux/ProfileItemReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers(
    { profile: ProfileItemReducer }
);
const store = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default store;