export function getAllTeams() {
  return { type: 'GET_ALL_TEAMS' };
}

export function setTeams(teams) {
  return { type: 'SET_TEAMS', teams };
}