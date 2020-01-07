import { createSelector } from 'reselect';
const TeamReducerState = state => state.TeamReducer || {};

const getTeams = () =>
createSelector(
    TeamReducerState,
    simpleState => simpleState.teams,
);

const getError = () =>
createSelector(
    TeamReducerState,
    simpleState => simpleState.error,
);

const getCurrentTeam = () =>
createSelector(
    TeamReducerState,
    simpleState => simpleState.team,
);


export { TeamReducerState, getTeams, getError, getCurrentTeam };