/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react';
import { Container, Row,Col, Card } from 'react-bootstrap';
import styles from '../../Assets/css/Product.module.css';
import one from '../../Assets/images/product/01.jpg';
import two from '../../Assets/images/product/02.jpg';
import three from '../../Assets/images/product/03.jpg';
import four from '../../Assets/images/product/04.jpg';
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BsBucketFill } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";


class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <Fragment>
                <Container fluid={true} >
                    <Row className={styles.ProductContainer}>

                        <Col lg={3} xl={3} md={3} sm={6} xs={6}>
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={one} alt="" />
                            <Card.Body>
                                <p className={styles.ProductTitle}>Curtics Cumis</p>
                                <h2 className={styles.ProductPrice}>Tk: 100.00</h2>
                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><a href="#"> <BsFillSuitHeartFill /></a></p>
                                    <p className={styles.AddToCard}><a href="#"><BsCartFill /></a></p>
                                    <p className={styles.BuyNow}><a href="#"><BsBucketFill /></a></p>
                                </div>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} xl={3} md={3} sm={6} xs={6}>
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={two} alt="" />
                            <Card.Body>
                                <p className={styles.ProductTitle}>Curtics Cumis</p>
                                <h2 className={styles.ProductPrice}>Tk: 100.00</h2>
                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><a href="#"> <BsFillSuitHeartFill /></a></p>
                                    <p className={styles.AddToCard}><a href="#"><BsCartFill /></a></p>
                                    <p className={styles.BuyNow}><a href="#"><BsBucketFill /></a></p>
                                </div>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} xl={3} md={3} sm={6} xs={6}>
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={three} alt="" />
                            <Card.Body>
                                <p className={styles.ProductTitle}>Curtics Cumis</p>
                                <h2 className={styles.ProductPrice}>Tk: 100.00</h2>
                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><a href="#"> <BsFillSuitHeartFill /></a></p>
                                    <p className={styles.AddToCard}><a href="#"><BsCartFill /></a></p>
                                    <p className={styles.BuyNow}><a href="#"><BsBucketFill /></a></p>
                                </div>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} xl={3} md={3} sm={6} xs={6}>
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={four} alt="" />
                            <Card.Body>
                                <p className={styles.ProductTitle}>Curtics Cumis</p>
                                <h2 className={styles.ProductPrice}>Tk: 100.00</h2>
                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><a href="#"> <BsFillSuitHeartFill /></a></p>
                                    <p className={styles.AddToCard}><a href="#"><BsCartFill /></a></p>
                                    <p className={styles.BuyNow}><a href="#"><BsBucketFill /></a></p>
                                </div>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} xl={3} md={3} sm={6} xs={6}>
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={one} alt="" />
                            <Card.Body>
                                <p className={styles.ProductTitle}>Curtics Cumis</p>
                                <h2 className={styles.ProductPrice}>Tk: 100.00</h2>
                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><a href="#"> <BsFillSuitHeartFill /></a></p>
                                    <p className={styles.AddToCard}><a href="#"><BsCartFill /></a></p>
                                    <p className={styles.BuyNow}><a href="#"><BsBucketFill /></a></p>
                                </div>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} xl={3} md={3} sm={6} xs={6}>
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={two} alt="" />
                            <Card.Body>
                                <p className={styles.ProductTitle}>Curtics Cumis</p>
                                <h2 className={styles.ProductPrice}>Tk: 100.00</h2>
                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><a href="#"> <BsFillSuitHeartFill /></a></p>
                                    <p className={styles.AddToCard}><a href="#"><BsCartFill /></a></p>
                                    <p className={styles.BuyNow}><a href="#"><BsBucketFill /></a></p>
                                </div>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} xl={3} md={3} sm={6} xs={6}>
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={three} alt="" />
                            <Card.Body>
                                <p className={styles.ProductTitle}>Curtics Cumis</p>
                                <h2 className={styles.ProductPrice}>Tk: 100.00</h2>
                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><a href="#"> <BsFillSuitHeartFill /></a></p>
                                    <p className={styles.AddToCard}><a href="#"><BsCartFill /></a></p>
                                    <p className={styles.BuyNow}><a href="#"><BsBucketFill /></a></p>
                                </div>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} xl={3} md={3} sm={6} xs={6}>
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={four} alt="" />
                            <Card.Body>
                                <p className={styles.ProductTitle}>Curtics Cumis</p>
                                <h2 className={styles.ProductPrice}>Tk: 100.00</h2>
                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><a href="#"> <BsFillSuitHeartFill /></a></p>
                                    <p className={styles.AddToCard}><a href="#"><BsCartFill /></a></p>
                                    <p className={styles.BuyNow}><a href="#"><BsBucketFill /></a></p>
                                </div>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} xl={3} md={3} sm={6} xs={6}>
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={one} alt="" />
                            <Card.Body>
                                <p className={styles.ProductTitle}>Curtics Cumis</p>
                                <h2 className={styles.ProductPrice}>Tk: 100.00</h2>
                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><a href="#"> <BsFillSuitHeartFill /></a></p>
                                    <p className={styles.AddToCard}><a href="#"><BsCartFill /></a></p>
                                    <p className={styles.BuyNow}><a href="#"><BsBucketFill /></a></p>
                                </div>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} xl={3} md={3} sm={6} xs={6}>
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={two} alt="" />
                            <Card.Body>
                                <p className={styles.ProductTitle}>Curtics Cumis</p>
                                <h2 className={styles.ProductPrice}>Tk: 100.00</h2>
                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><a href="#"> <BsFillSuitHeartFill /></a></p>
                                    <p className={styles.AddToCard}><a href="#"><BsCartFill /></a></p>
                                    <p className={styles.BuyNow}><a href="#"><BsBucketFill /></a></p>
                                </div>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} xl={3} md={3} sm={6} xs={6}>
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={three} alt="" />
                            <Card.Body>
                                <p className={styles.ProductTitle}>Curtics Cumis</p>
                                <h2 className={styles.ProductPrice}>Tk: 100.00</h2>
                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><a href="#"> <BsFillSuitHeartFill /></a></p>
                                    <p className={styles.AddToCard}><a href="#"><BsCartFill /></a></p>
                                    <p className={styles.BuyNow}><a href="#"><BsBucketFill /></a></p>
                                </div>
                            </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} xl={3} md={3} sm={6} xs={6}>
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={four} alt="" />
                            <Card.Body>
                                <p className={styles.ProductTitle}>Curtics Cumis</p>
                                <h2 className={styles.ProductPrice}>Tk: 100.00</h2>
                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><a href="#"> <BsFillSuitHeartFill /></a></p>
                                    <p className={styles.AddToCard}><a href="#"><BsCartFill /></a></p>
                                    <p className={styles.BuyNow}><a href="#"><BsBucketFill /></a></p>
                                </div>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
            </Fragment>
         );
    }
}
 
export default Product;