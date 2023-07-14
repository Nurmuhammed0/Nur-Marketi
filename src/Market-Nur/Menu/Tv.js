import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import products from '../Products';


const cards7=products.card7

export default function Tv() {
  return (
    <div className='shopdiv1' align="center">
        <h1 className='shoph1'>ТВ и домашний кинотеатр</h1>

        <Container>
          <Row>
            {cards7 && cards7.map((b)=>{
              return(
                <Col lg={3} md={4} sm={6} xl={3} key={b.id}>
                      <Card as={Link} to={`/large/${b.id}`} className='shopcard'>
                      <div className='shopdiv'>
                        <Card.Img className='shopimg' src={b.img} />
                        </div>
                        <Card.Body>
                          <Card.Title>{b.title}</Card.Title>
                          <Card.Title>{b.price}</Card.Title>
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
