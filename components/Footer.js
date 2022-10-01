import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Link from 'next/link'
const Footer = () => {
    return (
        <Container fluid className="footer-bg ">
            <Row className="footer-container ">
                <Col xs={3} className='d-flex flex-column justify-content-center '>
                    <Image
                        alt='Logo'
                        src='/assets/logo.png'
                        width={80}
                        height={80}
                        layout='responsive'
                    ></Image>
                    <a href="zondar.co">@zondar</a>
                </Col>
                <Col xs={9} >
                    <Row className="footer-links">
                        <Col>
                            <Link href="https://instagram.com/proyectozondar?igshid=YmMyMTA2M2Y=" passHref>
                                <a>Instagram</a>
                            </Link>
                        </Col>
                        <Col>
                            <Link href="#" passHref>
                                <a>Youtube</a>
                            </Link>
                        </Col>
                        <Col>
                            <Link href="#" passHref>
                                <a>Twitter</a>
                            </Link>
                        </Col>
                        <Col>
                            <Link href="#" passHref>
                                <a>Facebook</a>
                            </Link>
                        </Col>
                    </Row>
                </Col>

            </Row>

        </Container>
    )
}

export default Footer