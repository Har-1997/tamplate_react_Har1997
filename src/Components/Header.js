import logo from './logo.svg';
import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Navbar, Nav } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export default class Header extends Component {
  render() {
    return (
        <>
            <Router>
                <Navbar collapseOnSelect sticky='top' expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={NavLink} to="/">
                            <img 
                                src={logo} 
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> React site
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
                                <Nav.Link as={NavLink} to="/about" >About us</Nav.Link>
                                <Nav.Link as={NavLink} to="/contacts" >Contacts</Nav.Link>
                                <Nav.Link as={NavLink} to="/blog" >Blog</Nav.Link>
                            </Nav>
                            <Form  className='d-flex'>
                                <FormControl 
                                    type='text'
                                    placeholder='Search'
                                    className='me-2'
                                />
                                <Button variant='outline-info'>Search</Button> 
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                </Routes>
            </Router>
        </>
    )
  }
}
