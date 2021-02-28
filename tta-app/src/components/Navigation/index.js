import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap'
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);


const NavigationAuth = ({ authUser }) => (
  <Navbar bg="light" variant="light">
      <div className="container">
      <Nav.Link href="#home">ArtVEIL</Nav.Link>  
    <Nav.Link href="#home"></Nav.Link>    
    <Nav className="mr-auto"> 
      {/* <Nav.Link href = {ROUTES.LANDING}>Landing</Nav.Link> */}
      <Nav.Link href ={ROUTES.HOME}>Home</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href ={ROUTES.ACCOUNT}>Account</Nav.Link> 
      <SignOutButton />
    </Nav>
      </div>
  </Navbar>

);

const NavigationNonAuth = () => (
  <Navbar bg="light" variant="light" className="container">
    <div className="container">
    <Navbar.Brand href="#home">ArtVEIL</Navbar.Brand>    
    <Nav className="mr-auto"> 
      {/* <Nav.Link href = {ROUTES.LANDING}>Landing</Nav.Link> */}

    </Nav>
    <Nav>
      <Nav.Link href ={ROUTES.SIGN_IN}>Sign In</Nav.Link>
      <Nav.Link href ={ROUTES.SIGN_UP}>Sign Up!</Nav.Link> 
    </Nav>
    </div>
  </Navbar>
);

export default Navigation;