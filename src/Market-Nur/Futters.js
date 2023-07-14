import React from 'react'
import { Container, Nav, Navbar,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Futters() {
  return (
    <div className='futbody'>
      <div className='futflex'>
        <div className='futblock'>
          <Navbar>
            <Nav className="d-block">
              <h3>Служба поддержки</h3>
              <Nav.Link>Свяжитесь с нами</Nav.Link>
              <Nav.Link >Центр помощи</Nav.Link>
              <Nav.Link >О нас</Nav.Link>
            </Nav>
          </Navbar>
        </div>

        <div className='futblock'>
          <Navbar>
            <Nav className="d-block">
            <h3>Магазин</h3>
              <Nav.Link as={Link} to={'/shopall'}>Магазин Все</Nav.Link>
              <Nav.Link as={Link} to={'/comp'}>Компьютеры</Nav.Link>
              <Nav.Link as={Link} to={'/tablets'}>Планшеты</Nav.Link>
              <Nav.Link as={Link} to={'/dron'}>Дроны и камеры</Nav.Link>
              <Nav.Link as={Link} to={'/tv'}>ТВ и домашний кинотеатр</Nav.Link>
              <Nav.Link as={Link} to={'/audio'}>Наушники</Nav.Link>
              <Nav.Link as={Link} to={'/mobile'}>Мобильный</Nav.Link>
              {/* <Nav.Link as={Link} to={'/books'}>Книги</Nav.Link> */}
            </Nav>
          </Navbar>
        </div>

        <div className='futblock'>
          <Navbar>
            <Nav className="d-block futcolor">
            <h3>Политика</h3>
              <Nav.Link className=''>Доставка и возврат</Nav.Link>
              <Nav.Link href="#features">Условия</Nav.Link>
              <Nav.Link href="#pricing">Способы оплаты</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </div>
      <Container>
        <div className='payment' align='center'>
          <h5 style={{margin:'30px'}}>Мы принимаем следующие способы оплаты</h5>
          <div>
            <Image className='futkart' src='https://static.wixstatic.com/media/84770f_27001c40036842889a78a72766ad4700~mv2.png/v1/fill/w_55,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.png'/>
            <Image className='futkart' src='https://credits.ru/uploads/image/QmZwmcbJykuA3FasYoR9GA.jpg'/>
            <Image className='futkart' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmY3NJaLfyKzdiAhqFN2q14LvtqNQtJkDEHg&usqp=CAU'/>
            <Image className='futkart' src='https://elsom.kg/wp-content/uploads/2020/12/logo-Elsom-RGB-72.png'/>
            <Image className='futkart' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9iGuUl_C18ERVdd0Te7MynwK0w9jwtjjwdnTJyMdjwX6hK7WXNrB4nzNYCxequx82lA&usqp=CAU'/>
            <Image className='futkart' src='https://investor100.ru/wp-content/uploads/2016/11/Mast-1024x584.jpg'/>
          </div>
        </div>
      </Container>
    </div>
  )
}
