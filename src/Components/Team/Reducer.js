const initialState = {
  teams: '',
}

export default function TeamReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TEAMS':
      return {
        ...state, teams: action.teams
      }
    default:
      return state
  }
}