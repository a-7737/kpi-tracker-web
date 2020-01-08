import { all, fork } from 'redux-saga/effects'
import TeamSaga from './Components/Team/Saga';
import HomeSaga from './Components/Home/saga';
import UserSaga from './Components/User/Saga'

export default function* rootSaga() {
  yield all([
    fork(TeamSaga),
    fork(HomeSaga),
    fork(UserSaga),
  ])
}