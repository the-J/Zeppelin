import { combineReducers } from 'redux';

const projects = ( state = { loading: false, data: [] }, action ) => {
    switch (action.type) {
        case 'FETCH_PROJECTS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_PROJECTS_FAILURE':
            return { ...state, loading: false };
        case 'FETCH_PROJECTS_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        default:
            return state;
    }
};

const selectedPoints = ( state = null, action ) => {
    switch (action.type) {
        case 'SELECT_POINT': {
            return action.payload;
        }
        case 'DESELECT_POINT':
            return null;
        default:
            return state;
    }
};

const isAppLoading = ( state = false, action ) => {
    switch (action.type) {
        case 'APP_INIT' :
            return true;
        case 'APP_INIT_FINISHED':
            return false;
        default:
            return state;
    }
};

const shops = ( state = [], action ) => {
    switch (action.type) {
        default:
            return state;
    }
};

const similars = ( state = {}, action ) => {
    switch (action.type) {
        case 'FIND_PROJECT_SIMILARS':
            return {};
        case 'RECEIVE_SHOP_SIMILAR':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default combineReducers({
    projects,
    selectedPoints,
    isAppLoading,
    shops,
    similars
});
