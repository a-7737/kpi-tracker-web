import React, { Component } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import User from "../User/User";
import PropTypes from 'prop-types';

class UserModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
       username: ``,
       password: ``,
       isClick: false
    };
    this.handleClose = this.handleClose.bind(this)
    this.handleChangeEvent = this.handleChangeEvent.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClose() {
    this.props.handleShowEvt()
  }

  handleChangeEvent(key, value) {
     this.setState({
        ...this.state, [key]: value
     });
  }

  handleClick() {
    this.setState({
      isClick: true 
    })
  }

  render() {
    const { show } = this.props;
    const { username, password, isClick } = this.state

    if (isClick) {
      return <User username={username} password={password}/>
    }

    return (
      <Modal size="lg" show={show} onHide={this.handleClose}>  
      <Modal.Header closeButton>
         <Modal.Title id="contained-modal-title-vcenter" >Please Re-enter your username and Password</Modal.Title>
      </Modal.Header>       
      <Modal.Body> 
        <div>
        <InputGroup className="mb-3">
        <FormControl
           placeholder="Username"
           aria-label="Username"
           aria-describedby="inputGroup-sizing-sm"
           onChange={(evt) => this.handleChangeEvent("username", evt.target.value)}
         />
        </InputGroup>
        </div>
        <div>
        <InputGroup className="mb-3">
        <FormControl
           placeholder="Password"
           aria-label="Password"
           aria-describedby="inputGroup-sizing-sm"
           onChange={(evt) => this.handleChangeEvent("password", evt.target.value)}
         />
        </InputGroup>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleClose}>
            Close >>
        </Button>
        <Button variant="primary" onClick={this.handleClick}>
            Continue >>
        </Button>
      </Modal.Footer>
      </Modal>
    )
  }
}

UserModal.protoType = {
  show: PropTypes.bool,
};

export default (UserModal); 