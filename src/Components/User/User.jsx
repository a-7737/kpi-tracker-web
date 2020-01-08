import React, { Component } from "react";
import { getAllUsers, getUser } from "./Actions"
import { getUsers, getUserByUsernameAndPassword } from "./Selectors"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Form, Row, Col } from "react-bootstrap";

class User extends Component {

   constructor() {
      super();
      this.state = { 
         result: [],
      };
      this.parseUser = this.parseUser.bind(this);
   }

   componentDidMount() {
      const { username, password } = this.props;
      const payload = { username, password }
      this.props.getAllUsers()

      if (username != null && password != null) {
         this.props.getUser(payload)
      }
   }

   parseUser(user) {
      var result = {}
      Object.keys(user).map((key) => {
         result[key] = {
            key: key,
            value: user[key],
         }
      });
      this.setState({
         ...this.state, result: result
      })
   }

   render() {
      const { user, users } = this.props;
      const { result } = this.state

      if (user) {
         this.parseUser(user.result)
      }

      return (
         <div class="container">
            {user && 
            <div class="container">
               <div class="row">
                  <div class=".col-lg-6"><b><l><h2>{user.result.employeeName}</h2></l></b></div>
               </div>
               <div class="row">
                  <div class="col-lg-6 col-md-4"><b><h6>Username: </h6></b></div>
                  <div class="col-lg-6 col-md-8">{user.result.userName}</div>
               </div>
               <div class="row">
                  <div class="col-lg-6 col-md-4"><b><h6>Privilege: </h6></b></div>
                  <div class="col-lg-6 col-md-8">{user.result.privilege}</div>
               </div>
            </div>}
         </div>
      )
   }
}

const mapStateToProps = createStructuredSelector({
   users: getUsers(),
   user: getUserByUsernameAndPassword()
});

const mapDispatchToProps = dispatch => ({
   getAllUsers: () => dispatch(getAllUsers()),
   getUser: (payload) => dispatch(getUser(payload))
});

User.protoType = {
   username: PropTypes.string.isRequired,
   password: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(User)