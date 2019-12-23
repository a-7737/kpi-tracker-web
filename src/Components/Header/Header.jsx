import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/kpi.png';

export default function Header() {
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
            <Nav.Item><Link to="/">Home</Link></Nav.Item>
            <Nav.Item><Link to="/teams">Teams</Link></Nav.Item>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
