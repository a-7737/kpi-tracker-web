const initialState = {
  teams: '',
  error: '',
  team: {id: '', name: ''},
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
        return {...state, error: action.msg }

      case 'ONCHANGE':
        const { teamName } = action;
        console.log(teamName, 'teamName')
        const team = state.team;
        team.name = teamName;
        console.log(team, 'team', {...state, team })
          return {...state, team }
    
      default:
      return state
  }
}