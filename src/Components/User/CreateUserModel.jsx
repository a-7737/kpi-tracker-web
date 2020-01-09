import React, { Component } from "react";
import { createUser } from "./Actions"
import { getMessage } from "./Selectors"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import PropTypes from 'prop-types';

class CreateUserModel extends Component {

    constructor() {
        super();
        this.state = {
            user: {
                employeeName: ``,
                userName: ``,
                password: ``,
                privilege: ``,
            },
            isAdd: false,
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }

    handleChangeEvent(key, value) {
        this.setState({ user: { 
            [key]: value
        }
        });
    }

    handleOnClick() {
        this.setState({ isAdd: true})
    }

    render() {
        const { msg, show, handleClose } = this.props;
        const { user, isAdd } = this.state

        if (isAdd) {
            this.props.createUser(user)
        }

        return (
            <div>
                <div>{msg}</div>
                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" >Please enter the following details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group />
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">Name: </Form.Label>
                                <Col sm="6" className="text-xl-left">
                                    <Form.Control placeholder="Name" onChange={(evt) => this.handleChangeEvent("employeeName", evt.target.value)} />
                                    <Form.Text className="text-muted">Please enter a vaild name</Form.Text>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">Team: </Form.Label>
                                <Col sm="6">
                                    <Form.Control placeholder="Team" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">Privilege: </Form.Label>
                                <Col sm="6" className="text-xl-left">
                                    <Form.Control placeholder="Admin/Manager/Employee" onChange={(evt) => this.handleChangeEvent("privilege", evt.target.value)} />
                                    <Form.Text className="text-muted">Please enter the privilege as mentioned</Form.Text>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">Username: </Form.Label>
                                <Col sm="6" className="text-xl-left">
                                    <Form.Control placeholder="username" onChange={(evt) => this.handleChangeEvent("userName", evt.target.value)} />
                                    <Form.Text className="text-muted">Please enter a valid username</Form.Text>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">Password: </Form.Label>
                                <Col sm="6" className="text-xl-left">
                                    <Form.Control placeholder="username" onChange={(evt) => this.handleChangeEvent("password", evt.target.value)} />
                                    <Form.Text className="text-muted">Please enter a default password</Form.Text>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}> CLOSE </Button>
                        <Button variant="primary" onClick={this.handleOnClick} onHide={handleClose}> ADD </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    msg: getMessage(),
});

const mapDispatchToProps = dispatch => ({
    createUser: (user) => dispatch(createUser(user))
});

CreateUserModel.protoType = {
    show: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserModel)