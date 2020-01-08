import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAllKpis, deleteKpi, clearState } from './Actions';
import { getKpis, getError } from './Selectors';
import { Card, Button } from 'react-bootstrap';
import holder from '../../assets/holder.svg';
import KpiDetails from './DeleteKpiModal';

class Kpi extends Component {

  constructor() {
    super();
    this.state = { show: false, kpiInfo: '' }
    this.deleteKpi = this.deleteKpi.bind(this);
    //this.toggleModal = this.toggleModal.bind(this);
    this.getKpiId = this.getKpiId.bind(this);


  }

  componentDidMount() {
    this.props.getAllKpis();
  }

  deleteKpi(e, kpi) {
    e.preventDefault();
    this.setState({ show: !this.state.show, kpiInfo: kpi });
  }

  getKpiId(e, id) {
    e.preventDefault();
    this.props.history.push(`/manageKpi/${id}`);
    // this.setState({  id: id });
  }

  toggleModal(e) {
    // e.preventDefault();
    this.setState({ show: !this.state.show, kpiInfo: '' })
  }

  render() {
    const { kpis, error } = this.props;
    const { show, kpiInfo } = this.state;
    return (
      <div className="container Kpis">
        <Button variant="primary create-kpi" onClick={(e) => this.getKpiId(e, '')}>Create Kpi</Button>
        <div className="row">
          {kpis && kpis.length > 0 && kpis.map((kpi, key) =>
            <Card border="light" className="m-2">
              <Card.Img variant="top" src={holder} />
              <Card.Body>
                <Card.Title>{kpi.kpi}</Card.Title>
                <Card.Text>
                  Team description can be added here
                </Card.Text>
                <div>
                  <div className="col-md-6"></div>

                  <span className="manage-icons" variant="primary" onClick={(e) => this.deleteKpi(e, kpi)}><i class="far fa-trash-alt"></i></span>
                  <span className="manage-icons" variant="primary" onClick={(e) => this.getKpiId(e, kpi.id)}><i class="far fa-edit"></i></span>
                </div>

              </Card.Body>
            </Card>
          )}
        </div>
        <KpiDetails
          show={show}
          kpiInfo={kpiInfo}
          handleClose={this.toggleModal}
          deleteKpi={this.props.deleteKpi}
          error={error}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  kpis: getKpis(),
  error: getError()
});

const mapDispatchToProps = dispatch => ({
  getAllKpis: () => dispatch(getAllKpis()),
  deleteKpi: (id, callback) => dispatch(deleteKpi(id, callback)),
  clearState: () => dispatch(clearState())
})


export default connect(mapStateToProps, mapDispatchToProps)(Kpi)