import { call, put, takeLatest, select } from 'redux-saga/effects'
import Api from '../../utils/api';
import { getAllKpis } from './Actions';
import { getCurrentKpi } from './Selectors';

const dummyData = [
  {
    "id": "5e15b2fd9990881841780989",
    "kpi": "Sprint Predictability",
    "kpiParams": [
                "teste101124567",
                "testee0",
                "testeee"
     ]
  },
  {
    "id": "5e15b2fd9990881841780989",
    "kpi": "Sprint Predictability2",
    "kpiParams": [
                    "teste1011245672",
                    "testee0",
                    "testeee"
    ]
  }
];

function* fetchKpis() {
  try {
    const kpis = yield call(Api.kpis.getAllKpis);
    yield put({ type: "SET_KPIS", kpis });
  } catch (e) {

  }
}

function* fetchKpiById(action) {
  try {

    const kpi = yield call(Api.kpis.getKpi,action.id);
    yield put({ type: "SET_KPI", kpi });
  } catch (e) {

  }
}

function* deleteKpi(action) {
  const { id, callback } = action;
  try {


    const status = yield call(Api.kpis.deleteKpi, action.id);
    if (status === "Operation successful!") {
      yield call(getAllKpis());
      yield call(callback);
    } else {
      yield put({ type: "ERROR", msg: "Delete failed Try again" });
    }

  } catch (e) {

  }
}


function* manageKpi(action) {
  const { handler } = action;
  try {
    const state = yield select((state) => state.KpiReducer);
    const kpi = state.kpi;
    if (kpi.id) {
      //update
      const status = yield call(Api.kpis.updateKpi, kpi);
      yield put({ type: 'CLEARSTATE' })
      yield call(handler);
    } else {
      //create
      const status = yield call(Api.kpis.createKpi, kpi.kpi ,kpi.kpiParams);
      yield put({ type: 'CLEARSTATE' })
      yield call(handler);
    }

  } catch (e) {

  }
}

function* KpiSaga() {
  yield takeLatest("GET_ALL_KPIS", fetchKpis);
  yield takeLatest("GET_KPI", fetchKpiById);
  yield takeLatest("DELETE_KPI", deleteKpi);
  yield takeLatest("MANAGE_KPI", manageKpi);

}

export default KpiSaga;