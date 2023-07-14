import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {FcLike} from 'react-icons/fc'
import products from '../Products'    

export default function LargeCards() {
  let {id} = useParams();

  let car = Object.keys(products)
  car = car.map(g => products[g])
  car = car.reduce((p, c) => [...p, ...c], [])
  car = car.find(g => g.id === +id)
  console.log(car)

   

  // const btn = <input/>.value
  // const [number,setNum]=useState(0)

  return (
    <div align="center">
      <Row>
      <Col>
            <Card className='largecard'>
              <div className='largdiv'>
              <Card.Img style={{width:'45%',height:'400px',borderRadius:'20px',margin:'5px' }} src={car.img}/>
                <Card.Body>
                  <Card.Title style={{display:'flex',justifyContent:'center'}}>{car.title}</Card.Title>
                  <Card.Title>{car.title2}</Card.Title>
                  <Card.Title>{car.price}</Card.Title>
                  <Card.Text>{car.text}</Card.Text>
                  <Card.Text>{car.text1}</Card.Text>
                  <Card.Text>{car.text2}</Card.Text>
                  <Card.Text>{car.text3}</Card.Text>
                  <Card.Text>{car.text4}</Card.Text>
                  <Card.Text>{car.text5}</Card.Text>
                  <Card.Text>{car.text6}</Card.Text>
                </Card.Body>
              </div>
              <div>
              <Container>
                <Card.Title className='largdiv2'>{car.price}</Card.Title>
                <h5 className='largdiv2'>Количество</h5>
                <div className='largdiv2'><input className='largdiv1' type={'number'}/></div>
                <div className='largdiv2'><button className='largdiv3'>Добавить в корзину</button>
                <button style={{border:'none',backgroundColor:'#fff'}}><FcLike className='like'/></button></div>
                <div className='largdiv2'><button className='largdiv4'>Купить сейчас</button></div>
              </Container>
              </div>
            </Card>
          </Col> 
      </Row>
    </div>
  )
}
