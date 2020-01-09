import { createSelector } from 'reselect';
const UserReducerState = state => state.UserReducer || {};

const getUsers = () =>
  createSelector(
    UserReducerState,
    simpleState => simpleState.users,
  );

const getUserByUsernameAndPassword = () =>
  createSelector(
    UserReducerState,
    simpleState => simpleState.user,
  );

const getMessage = () =>
  createSelector(
    UserReducerState,
    simpleState => simpleState.msg,
  );

export { UserReducerState, getUsers, getUserByUsernameAndPassword, getMessage };