import {useState, useEffect} from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";

import {navLinks} from "../data/index";
import {NavLink} from "react-router-dom";

import LogoImage from '../assets/img/logo.png';

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    }else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor);
  })

  return (
    <div>
      <Navbar bg="light" expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={LogoImage} alt="logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-end">
            {navLinks.map((link) => {
              return (
              <div className="nav-link" key={link.id}>
            <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>{link.text}
            </NavLink>
              </div>
              );
            })}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavbarComponent;