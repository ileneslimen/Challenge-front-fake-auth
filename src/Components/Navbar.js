import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/Useractions";
function Navbare() {
  const users = useSelector((state) => state.UserReducer.users);
  const user = users.find((el) => el.auth);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user ? (
                <>
                  <Nav.Link as={Link} to="/movies">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Profile">
                    Profil
                  </Nav.Link>
                  <Nav.Link onClick={() => dispatch(logout())}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link>Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbare;
