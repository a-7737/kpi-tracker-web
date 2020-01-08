import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../../utils/api';

function* submitReport(action) {
    const { data } = action;
    console.log("^^^^^^^^&*********% " +JSON.stringify(data));
    try {
        const result = yield call(Api.report.submitReport, data );
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
function* ReportSaga() {
    yield takeLatest("SUBMIT_REPORT", submitReport);
}

export default ReportSaga;