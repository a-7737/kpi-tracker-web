import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { handleChange, getKpi, manageKpi, clearState} from './Actions';
import { getError, getCurrentKpi } from './Selectors';


class ManageKpi extends Component {

  constructor() {
    super();
    this.state = { id: '' };
    this.manageKpi = this.manageKpi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAftersubmit = this.handleAftersubmit.bind(this);
  }

  componentDidMount() {
    const params = this.props.match.params;
    if (params && params.id) {
      this.props.getKpi(params.id);
      // this.props.handleChange('id', params.id)
    } else {
      this.props.clearState();
    }
  }

  handleChange(e) {
    e.preventDefault();
    const field = e.target.kpi;
    const value = e.target.value;
    this.props.handleChange(field, value)
  }

  manageKpi(e) {
    e.preventDefault();
    this.props.manageKpi(this.handleAftersubmit);
  }

  handleAftersubmit() {
    this.props.history.push('/kpi');
  }




  render() {
    const { kpi, error } = this.props;
    const { id } = this.state;


    return (
      <div className="container Kpis">
        <div className="row">

          <input type="text" value={kpi.kpi} onChange={this.handleChange} />

          <button variant="primary" onClick={this.manageKpi}>{kpi && kpi.id ? 'Update' : 'Create'}</button>

        </div>


      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  error: getError(),
  kpi: getCurrentKpi(),
});

const mapDispatchToProps = dispatch => ({
  getKpi: (id) => dispatch(getKpi(id)),
  handleChange: (field, value) => dispatch(handleChange(field, value)),
  manageKpi: (handler) => dispatch(manageKpi(handler)),
  clearState : () => dispatch(clearState())

})


export default connect(mapStateToProps, mapDispatchToProps)(ManageKpi)
