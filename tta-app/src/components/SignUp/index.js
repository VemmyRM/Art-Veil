import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1><center>SignUp</center></h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
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
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div class="form-signin container mt-5">
      <form onSubmit={this.onSubmit} class="container">
      <h1 class="h3 mb-3 fw-expanded">Please sign up</h1>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          class="form-control mt-4 "
          type="text"
          placeholder="Full Name"
          style={{height: "50px"}}
        />

        <input
          name="email"
          value={email}
          onChange={this.onChange}
          class="form-control mt-4 "
          type="text"
          placeholder="Email Address"
          style={{height: "50px"}}
        />

        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          class="form-control mt-4"
          type="password"
          placeholder="Password"
          style={{height: "50px"}}
        />  


        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          class="form-control mt-4 "
          type="password"
          placeholder="Confirm Password"
          style={{height: "50px"}}
        />
        <br />
        <button disabled={isInvalid} type="submit" class="w-100 btn btn-lg btn-primary">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <div class="container">
    <p style={{color:"white"}} class="container">
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
  </div>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };