import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { handleChange, getTeam, manageTeam, clearState} from './Actions';
import { getError, getCurrentTeam } from './Selectors';


class ManageTeam extends Component {

  constructor() {
    super();
    this.state = { id: '' };
    this.manageTeam = this.manageTeam.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAftersubmit = this.handleAftersubmit.bind(this);
  }

  componentDidMount() {
    const params = this.props.match.params;
    console.log(params.id);
    if (params && params.id) {
      this.props.getTeam(params.id);
      // this.props.handleChange('id', params.id)
    } else {
      console.log("hii");
      this.props.clearState();
    }
  }

  handleChange(e) {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    this.props.handleChange(field, value)
  }

  manageTeam(e) {
    e.preventDefault();
    this.props.manageTeam(this.handleAftersubmit);
  }

  handleAftersubmit() {
    this.props.history.push('/teams');
  }




  render() {
    const { team, error } = this.props;
    const { id } = this.state;


    return (
      <div className="container Teams">
        <div className="row">

          <input type="text" value={team.name} onChange={this.handleChange} />

          <button variant="primary" onClick={this.manageTeam}>{team && team.id ? 'Update' : 'Create'}</button>

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
  handleChange: (field, value) => dispatch(handleChange(field, value)),
  manageTeam: (handler) => dispatch(manageTeam(handler)),
  clearState : () => dispatch(clearState())

})


export default connect(mapStateToProps, mapDispatchToProps)(ManageTeam)
