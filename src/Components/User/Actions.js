export function getAllUsers() {
    return { type: 'GET_ALL_USERS' };
 }
 
 export function getUser(payload) {
    return{ type: 'GET_USER', payload};
 }
 
 export function setUsers(users) {
    return { type: 'SET_USERS', users };
  }
 
 export function setUser(user) {
    return { type: 'SET_USER', user };
 }