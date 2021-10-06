import React from 'react';
import {
  withRouter
} from 'react-router-dom';
import './AppHeader.css';
import {Navbar, NavbarBrand} from "reactstrap";

function AppHeader() {

    return (
        <Navbar className="app-header">
          <NavbarBrand href="/" className={"appTitle"}>Lhotse!</NavbarBrand>
        </Navbar>
    );
}

export default withRouter(AppHeader);
