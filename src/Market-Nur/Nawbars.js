import React from 'react'
import {GoSearch} from "react-icons/go"
import {IoMdContact} from "react-icons/io"
import {GrFavorite} from 'react-icons/gr'
import {RiShoppingBasketFill} from 'react-icons/ri'
import { Container, Form, FormControl, Nav, Navbar, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Nawbars() {
  return (
    <div>
      <Navbar>
  <Container>
    <Navbar.Brand as={Link} to={"/"} className='nav'><span className='navspan'>NUR</span><span className='navspan2'>MARKET</span></Navbar.Brand>
    <Form className="d-flex">
        <FormControl
          className='navsearch'
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
        <Button className='navbtn'><GoSearch/></Button>
      </Form>
    <Navbar.Toggle />
    <Navbar.Collapse className="navdiv2 justify-content-end">
      <Navbar.Text className='icons1'><IoMdContact className='icon1'/>Login</Navbar.Text>
      <Navbar.Text className='icons1'><GrFavorite className='icon1'/>Favorites</Navbar.Text>
      <Navbar.Text className='icons1'><RiShoppingBasketFill className='icon1'/><span>0</span></Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
      

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to={'/shopall'} className='bold'>Магазин Все</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={'/comp'} className='bold'>Компьютеры</Nav.Link>
        <Nav.Link as={Link} to={'/tablets'} className='bold'>Планшеты</Nav.Link>
        <Nav.Link as={Link} to={'/dron'} className='bold'>Дроны и камеры</Nav.Link>
        <Nav.Link as={Link} to={'/tv'} className='bold'>ТВ и домашний кинотеатр</Nav.Link>
        <Nav.Link as={Link} to={'/audio'} className='bold'>Наушники</Nav.Link>
        <Nav.Link as={Link} to={'/mobile'} className='bold'>Мобильный</Nav.Link>
        {/* <Nav.Link as={Link} to={'/books'} className='bold'>Книги</Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
