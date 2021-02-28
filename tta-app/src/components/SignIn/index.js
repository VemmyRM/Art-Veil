import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div>
    <h1><center class="mt-5">Sign In</center></h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div className="form-signin container mt-5">
        
          <form onSubmit={this.onSubmit} class="container">
          <h1 className="h3 mb-3 fw-expanded">Please sign in</h1>
          {/* <div class="form-group"></div>
    <label class="control-label col-sm-2" for="email">Email:</label> */}
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          className="form-control mt-4 "
          type="text"
          placeholder="Email Address"
          style={{height: "50px"}}
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          className="form-control mt-4 mb-4"
          type="password"
          placeholder="Password"
          style={{height: "50px"}}
        />
        <button disabled={isInvalid} className="w-100 btn btn-lg btn-primary mb-3" type="submit">
          Sign In
        </button>
        <br />
        {error && <p>{error.message}</p>}
      </form>
      </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };