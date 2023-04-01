import React, { Component } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import AdminLogo from "../../assets/svg/AdminLogo.svg";
import styled from "styled-components";

import routes from "routes.js";

function Header() {
  const history = useHistory();

  const toHome = () => {
    history.push("/");  
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Logo src={AdminLogo} onClick={toHome} />
          <Navbar.Brand className="mr-2" style={{marginLeft: "10px", marginTop: "10px"}}>
            관리자 페이지
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;


const Logo = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  margin-left:10px;
`