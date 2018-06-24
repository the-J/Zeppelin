import {combineReducers} from 'redux';

const projects = (state = {loading: false, data: []}, action) => {
    switch (action.type) {
        case 'FETCH_PROJECTS_REQUEST':
            return {...state, loading: true};
        case 'FETCH_PROJECTS_FAILURE':
            return {...state, loading: false};
        case 'FETCH_PROJECTS_SUCCESS':
            return {...state, loading: false, data: action.payload};
        default:
            return state;
    }
};

const selectedPoints = (state = null, action) => {
    switch (action.type) {
        case 'SELECT_POINT': {
            return action.payload;
        }
        case 'DESELECT_POINT': {
            return null;
        }
        default:
            return state;
    }
};

const isAppLoading = (state = false, action) => {
    switch (action.type) {
        case 'APP_INIT' :
            return true;
        default:
            return state;
    }
};

export default combineReducers({isAppLoading, projects, selectedPoints: selectedPoints});