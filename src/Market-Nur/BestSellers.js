import React from 'react'
import products from './Products'
import {GrDeliver} from 'react-icons/gr'
import {ImGift} from 'react-icons/im'
import {BsPercent,BsClockHistory} from 'react-icons/bs'
import { Card,Button, Col, Container, Row } from 'react-bootstrap'



const cards=products.cardss
const cards2=products.card2

export default function BestSellers(props) {
  return (
    <div className='divmenu'>
       <div className='divicons'>
        <h6 className='iconh5'><GrDeliver className='icons'/> Доставка везде</h6>
        <h6 className='iconh5 '><ImGift className='icons'/> Бесплатная доставка КР</h6>
        <h6 className='iconh5'><BsPercent className='icons'/> Гарантия низких цен</h6>
        <h6 className='iconh5'><BsClockHistory className='icons'/> Доступно для вас 24/7</h6>
      </div>
        <div className='sellers' align="center">
          <h2>Cамые продаваемые товары</h2>

          <Container>
            <Row>
              {cards && cards.map((b)=>{
                return(
                  <Col lg={3} md={4} sm={6} xl={2} key={b.id}>
                      <div className='divcard'>
                        <Card className='ourcard'>
                          <Card.Img className='ourimg' src={b.img} />
                          <Card.Body>
                            <Card.Title>{b.title}</Card.Title>
                            <Card.Text className='price'><span className="discount">{b.discount}</span>{b.price}</Card.Text>
                          </Card.Body> 
                        </Card>
                      </div>
                  </Col>
                )
                })}
            </Row>
          </Container>
          <button className='btnmenu'>Посмотреть Все</button>
        </div>
        
        <div className='sellers' align="center">
        <h2>Cамые продаваемые товары</h2>

        <Container>
          <Row>
            {cards2 && cards2.map((b)=>{
              return(
                <Col lg={3} md={4} sm={6} xl={3} key={b.id}>
                      <Card className='ourcard2'>
                      <div className='divcard2'>
                        <Card.Img className='ourimg2' src={b.img} />
                        </div>
                        <Card.Body>
                          <Card.Title>{b.title}</Card.Title>
                        </Card.Body> 
                      </Card>
                </Col>
              )
              })}
          </Row>
        </Container>
        <button className='btnmenu'>Посмотреть Все</button>
      </div>

      <div>
        <Row>
          <Col>
            <Card className='ourcard3'>
              <div className='divcard3'>
                <Card.Img className='ourimg3' src="https://static.wixstatic.com/media/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png/v1/fill/w_1269,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png" />
                <Card.Body className='cardbody'>
                  <Card.Text className='cardtitle'>Save up to</Card.Text>
                  <Card.Text className='cardprice'>$150</Card.Text>
                  <Card.Text className='cardtitle'>Выбранные ноутбуки <br/> & бренды планшетов</Card.Text>
                  <Card.Text>Принять условия</Card.Text>
                  <Button className='cardbtn'>Mагазин</Button>
                </Card.Body> 
                <div className='bestprice'>
                  Лучший <br/> Цена
                </div>
               </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}
