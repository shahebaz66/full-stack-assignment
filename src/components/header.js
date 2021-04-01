import React from 'react'
import '../App.css'
import { Container,Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Head=()=>{
    return (
        <header class="header-section">
            <Container>
                <Row>
                    <Col lg="4" md="3">
                    <div class="logo">
                    <h2 class="site-logo">Riddle</h2>
                    </div>
                    </Col>
                    <Col lg="8" md="9">
                    <a href="" class="site-btn header-btn">Get in touch</a>
                    <nav class="main-menu">
                    <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Work</a></li>
                    <li><a href="">Contact</a></li>
                    </ul>
                    </nav>
                    </Col>
                </Row>
            </Container>
</header>
    )
}

export default Head