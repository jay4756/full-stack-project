import React from "react";

import { ListGroup, ListGroupItem } from "reactstrap";

import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="border border-light m-2 p-3">  
        <ListGroup>
        <ListGroupItem tag={NavLink} to="/" action>HOME</ListGroupItem>
        <ListGroupItem tag={NavLink} to="/add-course" action>Add-Course</ListGroupItem>
        <ListGroupItem tag={NavLink} to="/view-course" action>View-Course</ListGroupItem>
        <ListGroupItem tag={NavLink} to="/about" action>About us</ListGroupItem>
        <ListGroupItem tag={NavLink} to="/contact" action>Contact</ListGroupItem>
        </ListGroup>

        </div>
  );
}
export default Menu;