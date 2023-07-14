import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import products from '../Products'

const cards3=products.card3

export default function ShopAll() {
  return (
    <div className='shopdiv1' align="center">
        <h1 className='shoph1'>Магазин Все</h1>

        <Container>
          <Row>
            {cards3 && cards3.map((b)=>{
              return(
                <Col lg={3} md={4} sm={6} xl={3} key={b.id}>
                      <Card as={Link} to={b.url} className='shopcard'>
                      <div className='shopdiv'>
                        <Card.Img className='shopimg' src={b.img} />
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
      </div>
  )
}
