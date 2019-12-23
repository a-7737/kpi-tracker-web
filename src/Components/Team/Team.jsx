import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAllTeams } from './Actions';
import { getTeams } from './Selectors';
import { Card, Button} from 'react-bootstrap';
import holder from '../../assets/holder.svg';

class Team extends Component {

  componentDidMount() {
    this.props.getAllTeams();
  }

  render() {
    const { teams } = this.props;
    return (
      <div className="container Teams">
        <div className="row">
          {teams.length > 0 && teams.map((team, key) =>
            <Card border="light" className="m-2">
              <Card.Img variant="top" src={holder} />
              <Card.Body>
                <Card.Title>{team.name}</Card.Title>
                <Card.Text>
                  Team description can be added here
                </Card.Text>
                <Button variant="primary">View More</Button>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  teams: getTeams()
});

const mapDispatchToProps = dispatch => ({
  getAllTeams: () => dispatch(getAllTeams())
})


export default connect(mapStateToProps, mapDispatchToProps)(Team)
