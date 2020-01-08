import { createSelector } from 'reselect';

const TeamReducerState = state => state.TeamReducer || {};

const getTeams = () =>
  createSelector(
    TeamReducerState,
    simpleState => simpleState.teams,
  );

export { TeamReducerState, getTeams };