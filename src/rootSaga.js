import { all, fork } from 'redux-saga/effects'
import TeamSaga from './Components/Team/Saga'

export default function* rootSaga() {
  yield all([
    fork(TeamSaga),
  ])
}