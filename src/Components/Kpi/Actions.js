

export function getAllKpis() {
  return { type: 'GET_ALL_KPIS' };
}

export function setKpis(kpis) {
  return { type: 'SET_KPIS', kpis };
}

export function deleteKpi(id, callback) {
  return { type: 'DELETE_KPI', id, callback };
}



export function error(msg) {
  return { type: 'ERROR', msg };
}


export function getKpi(id) {
  return { type: 'GET_KPI', id };
}
export function setKpi(kpi) {
  return { type: 'SET_KPI', kpi };
}
export function manageKpi(handler) {
  return { type: 'MANAGE_KPI', handler };
}
export function handleChange(field, value) {
  return { type: 'ONCHANGE', field, value };
}

export function clearState() {
  return { type: 'CLEARSTATE' };
}