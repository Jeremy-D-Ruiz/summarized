// want to create a sign in option will pop out as modal - hidden once signed in
//create create account pop out as modal - hidden once signed in
// view history - hidden until signed in
// sign out - hidden until signed in


import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import AuthGoogle from '../src/componets/AuthGoogle';

function Nav() {
  const isAuthenticated = false; 



  return (
    <nav className="navbar navbar-expand-lg mb-2">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav my-4">
            {!isAuthenticated && (
              <>
             <li className="nav-item">
                <Link to="/auth-google-sign-in" className="nav-link btn-primary">Sign In</Link>
            </li>
                <li className="nav-item">
                  <Button as={Link} to="/auth-google-sign-up" className="nav-link btn-info">Create Account</Button>
                </li>
              </>
            )}
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Button as={Link} to="/history" className="nav-link btn-info">View History</Button>
                </li>
                <li className="nav-item">
                  <Button as={Link} to="/" className="nav-link btn-warning">Sign Out</Button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;