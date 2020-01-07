import React from 'react';
import {Modal, Button, Card} from 'react-bootstrap';


export default class TeamDetails  extends React.Component {
    constructor() {
        super();
        this.deleteTeam = this.deleteTeam.bind(this);
    }

    deleteTeam (e) {
        e.preventDefault();
        this.props.teamDelete(this.props.teamInfo.id, this.props.handleClose);
    }
    render() {
        return (<Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.teamInfo.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body> Team description can be added here</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.deleteTeam}>
                    Delete Team
                </Button>
                <p>{this.props.error}</p>
            </Modal.Footer>
        </Modal>)
    }
}