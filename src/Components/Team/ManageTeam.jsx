import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { updateTeam, handleChange, getTeam, createTeam} from './Actions';
import { getError, getCurrentTeam } from './Selectors';


class ManageTeam extends Component {

  constructor() {
    super();
    this.state={id :''};
    this.manageTeam = this.manageTeam.bind(this);
  }

  componentDidMount() {
    const params = this.props.match.params;
 
    if(params && params.id) {
        this.props.getTeam(params.id);
        // this.setState({id : params.id});
    }
  }
  
  manageTeam() {
    if(this.state.id) {
      this.props.updateTeam();
    } else {
      this.props.createTeam();
    }
  }

  

  render() {
    const { team, error } = this.props;
    const { id } = this.state;
console.log(team, 'team')

    return (
      <div className="container Teams">
        <div className="row">

          <input type="text" value={team.name} onChange={this.props.handleChange} />
          
              <button variant="primary" onClick={(e) => this.manageTeam}>{team && team.id ? 'Update' : 'Create' }</button>
           
        </div>

      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  error: getError(),
  team: getCurrentTeam(),
});

const mapDispatchToProps = dispatch => ({
  getTeam: (id) => dispatch(getTeam(id)),
  handleChange: (e) => {e.preventDefault(); return dispatch(handleChange(e.target.value))},
  updateTeam: () => dispatch(updateTeam()),
  createTeam: () => dispatch(createTeam())

})


export default connect(mapStateToProps, mapDispatchToProps)(ManageTeam)
