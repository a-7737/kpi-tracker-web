import { all, fork } from 'redux-saga/effects'
import TeamSaga from './Components/Team/Saga';
import HomeSaga from './Components/Home/saga';

export default function* rootSaga() {
  yield all([
    fork(TeamSaga),
    fork(HomeSaga),
  ])
}