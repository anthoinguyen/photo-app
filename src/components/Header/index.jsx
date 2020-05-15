import React from "react";
import { Container, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Header.scss"

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
            >
              AT NGUYEN
            </a>
          </Col>

          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
