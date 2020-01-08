import { call, put, takeLatest} from 'redux-saga/effects'
import Api from '../../utils/api';
import { getAllTeams} from './Actions';
// import { push } from 'react-router-redux';
import { getCurrentTeam } from './Selectors';

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
    // const teams = yield call(Api.teams.getAllTeams);
    yield put({ type: "SET_TEAMS", dummyData });
  } catch (e) {
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* fetchTeamById(action) {
    try {
      const team = dummyData[0];
        // const team = yield call(Api.teams.getTeam,action.id);
        yield put({ type: "SET_TEAM", team });
    } catch (e) {
        // yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
}

function* deleteTeam(action) {
    console.log(action)
    const { id, callback } = action;
  try {
    
    //yield put({ type: "ERROR", msg: "Delete failed Try again" });
   // yield put({ type: "SET_TEAMS", dummyData });
    const status = yield call(Api.teams.deleteTeam, action.id);
    if(status === "Operation successful!") {
      yield call(getAllTeams());
      yield call(callback);
     } else {
        yield put({ type: "ERROR", msg: "Delete failed Try again" });
     }

  } catch (e) {
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* updateTeam() {
  
try {
 
  const status = yield call(Api.teams.updateTeam, yield call(getCurrentTeam));
  if(status === "Operation successful!") {
    yield call(getAllTeams());
    //yield call(callback);
   } else {
      yield put({ type: "ERROR", msg: "Update failed Try again" });
   }

} catch (e) {
  // yield put({ type: "USER_FETCH_FAILED", message: e.message });
}
}

function* createTeam() {
  
  try {
    
    const status = yield call(Api.teams.createTeam, yield call(getCurrentTeam));
    if(status === "Operation successful!") {
      yield call(getAllTeams());
      //yield call(callback);
     } else {
        yield put({ type: "ERROR", msg: "Creation failed Try again" });
     }
  
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
  yield takeLatest("GET_TEAM", fetchTeamById);
  yield takeLatest("DELETE_TEAM", deleteTeam);
  yield takeLatest("UPDATE_TEAM", updateTeam);
  yield takeLatest("CREATE_TEAM", createTeam);

}

export default TeamSaga;