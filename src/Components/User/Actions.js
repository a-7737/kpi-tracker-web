export function getAllUsers() {
   return { type: 'GET_ALL_USERS' };
}

export function getUser(payload) {
   return { type: 'GET_USER', payload };
}

export function createUser(user) {
   return { type: 'CREATE_USER', user };
}

export function deleteUser(user) {
   return { type: 'DELETE_USER', user };
}

export function updateUser(user) {
   return { type: 'UPDATE_USER', user };
}

export function setUsers(users) {
   return { type: 'SET_USERS', users };
}

export function setUser(user) {
   return { type: 'SET_USER', user };
}

export function setMessage(msg) {
   return { type: 'MESSAGE', msg };
}