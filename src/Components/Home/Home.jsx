import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { changeValue, validate, submit } from './actions';
import { getFields, getValid } from './selectores';

const validations = {
  userName: 'checkEmpty',
  password: 'checkEmpty',
}

class Home extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAftersubmit = this.handleAftersubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    this.props.onChange(field, value)
  }

  handleValidate(e) {
    e.preventDefault();
    const field = e.target.name;
    this.props.onValidate(field, validations[field]);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(validations, this.handleAftersubmit);
  }

  handleAftersubmit() {
    this.props.history.push('/teams');
  }

  render() {

    const { fields, valid, onSubmit } = this.props;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-module">
            <div className="field row" >
              <label className="label col-md-6">Username</label>
              <input type="text" name="userName" className="col-md-6 form-control"
                onChange={this.handleChange} value={fields.userName.value}
                onBlur={this.handleValidate} />
              <div className="col-md-6"></div>
              <div className="col-md-6">
                {fields.userName.errors.length > 0 && <span className="error">{fields.userName.errors.map(err => err)}</span>}
              </div>
            </div>
            <div className="field row">
              <label className="label col-md-6">Password</label>
              <input type="password" className="form-control submit" name="password" onChange={this.handleChange} value={fields.password.value}
                onBlur={this.handleValidate} className="col-md-6 form-control" />
              <div className="col-md-6"></div>
              <div className="col-md-6">
                {fields.password.errors.length > 0 && <span className="error">{fields.password.errors.map(err => err)}</span>}
              </div>
            </div>

            <div>
              <div className="col-md-6"></div>
              <button disabled={!valid} className="form-control submit col-md-3" type="submit">Login</button>
            </div>
          </div>
        </form>

      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  fields: getFields(),
  valid: getValid(),
});

const mapDispatchToProps = dispatch => ({
  onChange: (field, value) => dispatch(changeValue(field, value)),
  onValidate: (field, validation) => dispatch(validate(field, validation)),
  onSubmit: (validations, handleAftersubmit) => dispatch(submit(validations, handleAftersubmit))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)

