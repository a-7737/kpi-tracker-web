import { call, put, takeLatest, take, push } from 'redux-saga/effects'
import Api from '../../utils/api';

function* fetchAllUsers() {
   try {
    const users = yield call(Api.user.getAllUsers);
    yield put({ type: "SET_USERS", users });
   } catch (e) {
       // catch e.message
   }
}

function* fetchUser(action) {
    const { payload } = action;
    try {
     const user = yield call(Api.user.getUser, payload);
     yield put({ type: "SET_USER", user });
    } catch (e) {
        // catch e.message
    }
}

function* UserSaga() {
    yield takeLatest("GET_ALL_USERS", fetchAllUsers);
    yield takeLatest("GET_USER", fetchUser);
}

export default UserSaga;