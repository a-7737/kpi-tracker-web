import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/kpi.png';
import UserModal from '../Shared/UserModal';

export default class Header extends React.Component {

  constructor() {
    super();
    this.state = { show: false };
    this.openUserModal = this.openUserModal.bind(this);
  }

  openUserModal(e) {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const { show } = this.state;
    return (
      <div className="Header">
        <Navbar expand="lg">
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} className="responsive logo" alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item><Link className='active' to="/">Home</Link></Nav.Item>
              <Nav.Item><Link to="/teams">Teams</Link></Nav.Item>
              <Nav.Item><Link to="/manageteam">Create Team</Link></Nav.Item>
              <Nav.Item><Link onClick={this.openUserModal}>User</Link></Nav.Item>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <UserModal show={show} handleShowEvt={this.openUserModal} />
      </div>
    )
  }
}
