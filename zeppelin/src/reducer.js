import {combineReducers} from 'redux';

const isAppLoading = (state = false, action) => {
    switch (action.type) {
        case 'APP_INIT' :
            return true;
        default:
            return state;
    }
};

export default combineReducers({isAppLoading});