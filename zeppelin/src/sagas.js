import {
    take,
    put,
    select,
    fork,
    cancel,
    takeLatest,
    all
} from 'redux-saga/effects';
import {random} from 'lodash';
import {randomDelay} from './utils';
// import { getShops } from "./selectors";
import {CALL_API} from 'redux-api-middleware';

const getProjectsList = () => ({
    [CALL_API]: {
        endpoint: '/api/projects',
        method: 'GET',
        types: [
            'FETCH_PROJECTS_REQUEST',
            'FETCH_PROJECTS_SUCCESS',
            'FETCH_PROJECTS_FAILURE'
        ]
    }
});

function* initApp() {
    yield take("APP_INIT");
    yield projectsFetch();
    yield put({type: "APP_INIT_FINISHED"});
}

function* projectsFetch() {
    yield randomDelay(1000, 2500);
    yield put(getProjectsList());
    yield take(["FETCH_PROJECTS_SUCCESS", "FETCH_PROJECTS_FAILURE"]);
}

export default function* rootSaga() {
    console.log('root saga');

    yield initApp();
    // yield takeLatest("PROJECTS_REFRESH", projectsFetch);
    // while (true) {
    //     const action = yield take("FIND_PROJECT_SIMILARS");
    //     yield fork(checkSimilars, action.payload);
    // }
}