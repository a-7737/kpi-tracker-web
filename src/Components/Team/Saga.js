import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../../utils/api';

const dummyData = [
  {
    "id": "5dd68ad0010f7b444dd5fb11",
    "name": "India"
  },
  {
    "id": "5de1232f16333068610e3c58",
    "name": "portugal"
  },
  {
    "id": "5de1233316333068610e3c59",
    "name": "spain"
  },
  {
    "id": "5de1233816333068610e3c5a",
    "name": "argentina"
  },
  {
    "id": "5de1233b16333068610e3c5b",
    "name": "italy"
  },
  {
    "id": "5de1233f16333068610e3c5c",
    "name": "france"
  },
  {
    "id": "5de1234516333068610e3c5d",
    "name": "germany"
  }
];

function* fetchTeams() {
  try {
    const teams = yield call(Api.teams.getAllTeams);
    yield put({ type: "SET_TEAMS", teams });
  } catch (e) {
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* TeamSaga() {
  yield takeLatest("GET_ALL_TEAMS", fetchTeams);
}

export default TeamSaga;