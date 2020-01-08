export function getAllTeams() {
  return { type: 'GET_ALL_TEAMS' };
}
export function submitReport(data) {
  return { type: 'SUBMIT_REPORT', data };
}