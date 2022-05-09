import React from 'react';
import { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import "./HeaderJJ.css";

export default function HeaderJJ() {

  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("light");

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const changeColor = () => setColor(color === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.style.backgroundColor = color === "light" ? "white" : "black";
  }, [color]);

  return (
    <Navbar className='bg-info text-success' light expand="md">
      <NavbarBrand href="/">
        <img src="/img/LogoSabiosGuias.png" alt='logo' id="header-jj-logo"/>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/all-routes">All routes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/JordanJTY/SabiosGuiasProject/">GitHub</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Resources
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="https://www.sabiosguiasinterpretes.com">Sabios Guías Intérpretes</NavLink>
              </DropdownItem>
              {/*<DropdownItem>
                    Option 2
                  </DropdownItem>*/}
              <DropdownItem divider />
              <DropdownItem onClick={changeColor}>
                Dark mode
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}