
const initialState = {
  users: '',
  user: '',
  msg: ``,
}

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.users }
    case 'SET_USER':
      return { ...state, user: action.user }
    case 'CREATE_USER':
      return { ...state, user: action.msg }
    case 'DELETE_USER':
      return { ...state, user: action.msg }
    case 'UPDATE_USER':
      return { ...state, user: action.msg }
    default:
      return state
  }
}