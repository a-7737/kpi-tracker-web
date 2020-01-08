import React from 'react';
import {Modal, Button} from 'react-bootstrap';


export default class KpiDetails  extends React.Component {
    constructor() {
        super();
        this.deleteKpi = this.deleteKpi.bind(this);
    }

    deleteKpi (e) {
        e.preventDefault();
        this.props.deleteKpi(this.props.kpiInfo.id, this.props.handleClose);
    }
    render() {
        return (<Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.kpiInfo.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body> Team description can be added here</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.deleteKpi}>
                    Delete Kpi
                </Button>
                <p>{this.props.error}</p>
            </Modal.Footer>
        </Modal>)
    }
}