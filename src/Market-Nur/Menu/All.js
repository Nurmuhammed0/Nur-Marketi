import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import ShopAll from './ShopAll'

export default function All(props) {
  const[add,setAdd]=useState([])
  let{id}=useParams()
  // useEffect(()=>{

  // })
  return (
    <div>
      <Row>
        <Col>
          <ShopAll name={add}/>
        </Col>
      </Row>

    </div>
  )
}
