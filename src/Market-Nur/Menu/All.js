import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ShopAll from './ShopAll'

export default function All(props) {
  const [add] = useState([])
  // useEffect(()=>{

  // })
  return (
    <div>
      <Row>
        <Col>
          <ShopAll name={add} />
        </Col>
      </Row>

    </div>
  )
}
