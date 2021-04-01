import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './screen.css'
const Contai = (props) => {
    console.log(props.photos.length);

    return (
        <div style={{ width: "100vw", margin: 0 }}>
            <Row style={{ justifyContent: 'center' }}>

                {props.photos.map((i, index) => {
                    return (

                        <Col key={index} sm="12" md="6" lg="4" style={{ padding: 0 }} >
                            <Card >
                                <Card.Img variant="top" style={{ width: 'inherit', height: 'inherit' }} src={i} />

                            </Card>
                        </Col>

                    )
                })}


            </Row>
        </div>
    )
}

export default Contai