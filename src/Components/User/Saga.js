import { call, put, takeLatest, take, push } from 'redux-saga/effects'
import Api from '../../utils/api';

const SUCCESS = "Operation successful!"
const FAILED =  "Operation failed..! Please Try again"

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

function* createUser(action) {
    const { user } = action;
    try {
     const msg = yield call(Api.user.createUser, user);
     if (msg === "Operation successful!") {
        yield put({ type: "MESSAGE", msg: SUCCESS });
      } else {
        yield put({ type: "MESSAGE", msg: FAILED });
      }
    } catch (e) {
        // catch e.message
    }
}

function* deleteUser(action) {
    const { user } = action;
    try {
     const msg = yield call(Api.user.delete, user);
     if (msg === "Operation successful!") {
        yield put({ type: "MESSAGE", msg: SUCCESS });
      } else {
        yield put({ type: "MESSAGE", msg: FAILED });
      }
    } catch (e) {
        // catch e.message
    }
}

function* updateUser(action) {
    const { user } = action;
    try {
     const msg = yield call(Api.user.updateUser, user);
     yield put({ type: "MESSAGE", msg: SUCCESS });
     if (msg === "Operation successful!") {
        yield put({ type: "MESSAGE", msg: SUCCESS });
      } else {
        yield put({ type: "MESSAGE", msg: FAILED });
      }
    } catch (e) {
        // catch e.message
    }
}

function* UserSaga() {
    yield takeLatest("GET_ALL_USERS", fetchAllUsers);
    yield takeLatest("GET_USER", fetchUser);
    yield takeLatest("CREATE_USER", createUser);
    yield takeLatest("DELETE_USER", deleteUser);
    yield takeLatest("UPDATE_USER", updateUser);
}

export default UserSaga;