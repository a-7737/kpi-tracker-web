const initialState = {
  kpis: '',
  error: '',
  kpi: { id: '', kpi: '' , kpiParams: ''},
}


export default function KpiReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_KPIS':
      return {
        ...state, kpis: action.dummyData
      }
    case 'DELETE_KPI':
      return {
        ...state, kpis: action.dummyData
      }
    case 'SET_KPI':
      return {
        ...state, kpi: action.kpi
      }
    case 'ERROR':
      return { ...state, error: action.msg }

    case 'ONCHANGE':
      const { field, value } = action;
      return Object.assign({}, state, {
        kpi: { ...state.kpi[field], value }
      })
    case 'CLEARSTATE':
      const kpi =  { id: '', kpi: '' , kpiParams: ''}
      return Object.assign({}, state, {
        kpi: { ...state.kpi, ...kpi , ...kpiParams}
      })
    default:
      return state
  }
}