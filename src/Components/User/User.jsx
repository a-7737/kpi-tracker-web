import React, { Component } from "react";
import { getAllUsers, getUser, deleteUser, updateUser } from "./Actions"
import { getUsers, getUserByUsernameAndPassword, getMessage } from "./Selectors"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Table, Tab } from "react-bootstrap";
import CreateUserModel from "./CreateUserModel";

class User extends Component {

   constructor() {
      super();
      this.state = { 
         result: [],
         isAdmin: true,
         createUser: false,
         userControl: false,
      };
      this.parseUser = this.parseUser.bind(this);
      this.validateUser = this.validateUser.bind(this);
      this.handleCreateuser = this.handleCreateuser.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
   }

   componentDidMount() {
      const { username, password, user } = this.props;
      const payload = { username, password }
      this.props.getAllUsers()

      if (username != null && password != null) {
         this.props.getUser(payload)
      }
   }

   parseUser(user) {
      var result = {}
      Object.keys(user.result).map((key) => {
         result[key] = {
            key: key,
            value: user.result[key],
         }
      });
      this.setState({
         ...this.state, result: result
      })
   }

   handleCreateuser() {
      this.setState({
         ...this.state, createUser: !this.state.createUser
      })
   }

   validateUser(user) {
      if (user.result.privilege == "admin") {
         this.setState({
            ...this.state, isAdmin: true
         })
      }
      this.setState({
         ...this.state, userControl: true
      })
   }

   handleDelete(user) {
      this.props.deleteUser(user)
   }

   handleUpdate(user) {
      this.props.updateUser(user)
   }

   render() {
      const { user, users, msg } = this.props;
      const { result, isAdmin, createUser, userControl } = this.state

      if (user && !userControl) {
         this.parseUser(user)
         this.validateUser(user)
      }

      if(createUser) {
         return <CreateUserModel show={createUser} handleClose={this.handleCreateuser}/>
      }

      return (
         <div className="container">
            <div>{msg}</div>
            {user && userControl &&
            <Container>
            <Row>
              <Col><b><l><h1>{user.result.employeeName}</h1></l></b></Col>
            </Row>
            <hr></hr>
            <Row>
              <Col xs={2} className="text-left"><b><h4>Username: </h4></b></Col>
              <Col xs={4} className="text-left">{user.result.userName}</Col>
            </Row><Row>
              <Col xs={2} className="text-left"><b><h4>DOB: </h4></b></Col>
              <Col xs={4} className="text-left">{user.result.dob}</Col>
            </Row>
            <Row>
              <Col xs={2} className="text-left"><b><h4>Gender: </h4></b></Col>
              <Col xs={4} className="text-left">{user.result.gender}</Col>
            </Row>
            <Row>
              <Col xs={2} className="text-left"><b><h4>Age: </h4></b></Col>
              <Col xs={4} className="text-left">{user.result.age}</Col>
            </Row>
            <Row>
              <Col xs={2} className="text-left"><b><h4>Team: </h4></b></Col>
              <Col xs={4} className="text-left">{user.result.team.name}</Col>
            </Row>
            <Row>
              <Col xs={2} className="text-left"><b><h4>Privilege: </h4></b></Col>
              <Col xs={4} className="text-left">{user.result.privilege}</Col>
            </Row>
            <hr></hr>
            {isAdmin && 
            <div>
               <Button onClick={this.handleCreateuser}> Create User </Button>
               {/* <Table>
            <Table.TableHead>
              <Table.TableRow>
                 <Table.TableCell>Name</Table.TableCell>
                 <Table.TableCell>Team</Table.TableCell>
                 <Table.TableCell>DELETE</Table.TableCell>
                 <Table.TableCell>UPDATE</Table.TableCell>
              </Table.TableRow>
            </Table.TableHead>
            <Table.TableBody>
                {users.result.map(user => (
                   <Table.TableRow>
                  <Table.TableCell key={user.employeeName}>
                    {user.employeeName}
                  </Table.TableCell>
                  <Table.TableCell key={user.team.name}>
                     {user.team.name}
                  </Table.TableCell>
                  <Table.TableCell>
                     <Button onClick={this.handleDelete(user)}> DELETE </Button>
                     <Button onClick={this.handleUpdate(user)}> UPDATE </Button>
                  </Table.TableCell>
                </Table.TableRow>
                ))}
            </Table.TableBody>
            </Table> */}
            </div>}
          </Container>}
         </div>
      )
   }
}

const mapStateToProps = createStructuredSelector({
   users: getUsers(),
   user: getUserByUsernameAndPassword(),
   msg: getMessage()
});

const mapDispatchToProps = dispatch => ({
   getAllUsers: () => dispatch(getAllUsers()),
   getUser: (payload) => dispatch(getUser(payload)),
   deleteUser: (user) => dispatch(deleteUser(user)),
   updateUser: (user) => dispatch(updateUser(user))
});

User.protoType = {
   username: PropTypes.string.isRequired,
   password: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(User)