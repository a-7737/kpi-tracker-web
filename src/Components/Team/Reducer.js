const initialState = {
  teams: '',
  error: '',
  team: { id: '', name: '' },
}

export default function TeamReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TEAMS':
      return {
        ...state, teams: action.dummyData
      }
    case 'DELETE_TEAMS':
      return {
        ...state, teams: action.dummyData
      }
    case 'SET_TEAM':
      return {
        ...state, team: action.team
      }
    case 'ERROR':
      return { ...state, error: action.msg }

    case 'ONCHANGE':
      const { field, value } = action;
      return Object.assign({}, state, {
        team: { ...state.team[field], value }
      })
    case 'CLEARSTATE':
      return state = initialState;
    default:
      return state
  }
}