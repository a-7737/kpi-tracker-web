/** Teams actions */


export function getAllTeams() {
  return { type: 'GET_ALL_TEAMS' };
}

export function setTeams(teams) {
  return { type: 'SET_TEAMS', teams };
}

export function deleteTeam(id, callback) {
    return { type: 'DELETE_TEAM', id,callback };
}



export function error(msg) {
    return { type: 'ERROR', msg };
}



/** Manage Teams actions */
export function getTeam(id) {
  return { type: 'GET_TEAM', id };
}
export function setTeam(team) {
return { type: 'SET_TEAM', team };
}

export function updateTeam(team) {
  return { type: 'UPDATE_TEAM', team };
}
export function handleChange(teamName) {
  return { type: 'ONCHANGE', teamName };
}


