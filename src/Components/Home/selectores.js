import { createSelector } from 'reselect';

const HomeReducerState = (state) => state.HomeReducer || {};

const getFields = () => createSelector(
  HomeReducerState,
  (homeState) => homeState.get('fields').toJS()
);

const getValid = () => createSelector(
  HomeReducerState,
  (homeState) => homeState.get('valid')
);

export { getFields, getValid };