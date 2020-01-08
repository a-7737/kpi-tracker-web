  
const initialState = {
    users: '',
    user: '',
  }
  
  export default function UserReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_USERS':
        return { ...state, users: action.users }
      case 'SET_USER':
        return { ...state, user: action.user } 
      default:
        return state
    }
  }