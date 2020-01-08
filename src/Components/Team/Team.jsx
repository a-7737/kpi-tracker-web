import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAllTeams, deleteTeam, clearState } from './Actions';
import { getTeams, getError } from './Selectors';
import { Card, Button } from 'react-bootstrap';
import holder from '../../assets/holder.svg';
import TeamDetails from './DeleteTeamModal';

class Team extends Component {

  constructor() {
    super();
    this.state = { show: false, teamInfo: '' }
    this.deleteTeam = this.deleteTeam.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.getTeamId = this.getTeamId.bind(this);


  }

  componentDidMount() {
    this.props.getAllTeams();
  }

  deleteTeam(e, team) {
    e.preventDefault();
    this.setState({ show: !this.state.show, teamInfo: team });
  }

  getTeamId(e, id) {
    e.preventDefault();
    this.props.history.push(`/manageteam/${id}`);
    // this.setState({  id: id });
  }

  toggleModal(e) {
    // e.preventDefault();
    this.setState({ show: !this.state.show, teamInfo: '' })
  }

  render() {
    const { teams, error } = this.props;
    const { show, teamInfo } = this.state;
    return (
      <div className="container Teams">
        <Button variant="primary create-team" onClick={(e) => this.getTeamId(e, '')}>Create Team</Button>
        <div className="row">
          {teams && teams.length > 0 && teams.map((team, key) =>
            <Card border="light" className="m-2">
              <Card.Img variant="top" src={holder} />
              <Card.Body>
                <Card.Title>{team.name}</Card.Title>
                <Card.Text>
                  Team description can be added here
                </Card.Text>
                <div>
                  <div className="col-md-6"></div>

                  <span className="manage-icons" variant="primary" onClick={(e) => this.deleteTeam(e, team)}><i class="far fa-trash-alt"></i></span>
                  <span className="manage-icons" variant="primary" onClick={(e) => this.getTeamId(e, team.id)}><i class="far fa-edit"></i></span>
                </div>

              </Card.Body>
            </Card>
          )}
        </div>
        <TeamDetails
          show={show}
          teamInfo={teamInfo}
          handleClose={this.toggleModal}
          teamDelete={this.props.teamDelete}
          error={error}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  teams: getTeams(),
  error: getError()
});

const mapDispatchToProps = dispatch => ({
  getAllTeams: () => dispatch(getAllTeams()),
  teamDelete: (id, callback) => dispatch(deleteTeam(id, callback)),
  clearState: () => dispatch(clearState())
})


export default connect(mapStateToProps, mapDispatchToProps)(Team)
