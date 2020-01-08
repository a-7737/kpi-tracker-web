import { createSelector } from 'reselect';

const KpiReducerState = state => state.KpiReducer || {};

const getKpis = () =>
createSelector(
    KpiReducerState,
    simpleState => simpleState.kpis,
);

const getError = () =>
createSelector(
    KpiReducerState,
    simpleState => simpleState.error,
);

const getCurrentKpi = () =>
createSelector(
    KpiReducerState,
    simpleState => simpleState.team,
);


export { KpiReducerState, getKpis, getError, getCurrentKpi };