import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { DataContext } from "../../context/provider";

const NavbarSearch = () => {
  const { cart } = useContext(DataContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Pizzeria Mama Mia</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={"home"}>
              <Nav.Link href="#action1">Home</Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex">
            <Link to={"cart"}>
              <Nav.Link href="#action2">
                <div style={{ paddingRigth: "5px", paddingLeft: "20px" }}>
                  <Badge color="error" badgeContent={cart.length}>
                    <ShoppingCartIcon fontSize="large" />
                  </Badge>
                </div>
              </Nav.Link>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSearch;
