/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react';
import { Container, Row,Col, Card } from 'react-bootstrap';
import styles from '../../Assets/css/Product.module.css';
import one from '../../Assets/images/product/01.jpg';
import two from '../../Assets/images/product/02.jpg';
import three from '../../Assets/images/product/03.jpg';
import four from '../../Assets/images/product/04.jpg';
import { BsHeart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';

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

                        <Col lg={3} xl={3} md={4} sm={6} xs={12}>
                        <Link to="#">
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={one} alt="" />
                            <Card.Body>

                                <div className={styles.ProductInfo}> 
                                    <div className={styles.PriceInfo}>
                                    <h2 className={styles.ProductPrice}>Tk. 100.00 {/*<span><del>Tk.120.00</del></span>*/} </h2> 
                                        <p><Link to="/checkout">Buy Now</Link></p>
                                    </div>
                                <p className={styles.ProductTitle}><Link to="/productdetails">This elegant, 100% viscose Kabli This elegant, 100% viscose</Link></p>
                                </div>

                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><Link to="/wishlist"> <BsHeart /></Link></p>
                                    <p className={styles.Search}><a href="#"><BsSearch /></a></p>
                                    <p className={styles.AddToCard}><Link to="/cart"><BsCart2 /></Link></p>
                                </div>

                            </Card.Body>
                            </Card>
                        </Link>
                        </Col>

                        <Col lg={3} xl={3} md={4} sm={6} xs={12}>
                        <Link to="#">
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={one} alt="" />
                            <Card.Body>

                                <div className={styles.ProductInfo}> 
                                    <div className={styles.PriceInfo}>
                                    <h2 className={styles.ProductPrice}>Tk. 100.00 {/*<span><del>Tk.120.00</del></span>*/} </h2> 
                                        <p><Link to="/checkout">Buy Now</Link></p>
                                    </div>
                                <p className={styles.ProductTitle}><Link to="/productdetails">This elegant, 100% viscose Kabli This elegant, 100% viscose</Link></p>
                                </div>

                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><Link to="/wishlist"> <BsHeart /></Link></p>
                                    <p className={styles.Search}><a href="#"><BsSearch /></a></p>
                                    <p className={styles.AddToCard}><Link to="/cart"><BsCart2 /></Link></p>
                                </div>

                            </Card.Body>
                            </Card>
                        </Link>
                        </Col>

                        <Col lg={3} xl={3} md={4} sm={6} xs={12}>
                        <Link to="#">
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={one} alt="" />
                            <Card.Body>

                                <div className={styles.ProductInfo}> 
                                    <div className={styles.PriceInfo}>
                                    <h2 className={styles.ProductPrice}>Tk. 100.00 {/*<span><del>Tk.120.00</del></span>*/} </h2> 
                                        <p><Link to="/checkout">Buy Now</Link></p>
                                    </div>
                                <p className={styles.ProductTitle}><Link to="/productdetails">This elegant, 100% viscose Kabli This elegant, 100% viscose</Link></p>
                                </div>

                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><Link to="/wishlist"> <BsHeart /></Link></p>
                                    <p className={styles.Search}><a href="#"><BsSearch /></a></p>
                                    <p className={styles.AddToCard}><Link to="/cart"><BsCart2 /></Link></p>
                                </div>

                            </Card.Body>
                            </Card>
                        </Link>
                        </Col>

                        <Col lg={3} xl={3} md={4} sm={6} xs={12}>
                        <Link to="#">
                        <Card className={styles.CardStyle}>
                            <img className={styles.ProductImg} src={one} alt="" />
                            <Card.Body>

                                <div className={styles.ProductInfo}> 
                                    <div className={styles.PriceInfo}>
                                    <h2 className={styles.ProductPrice}>Tk. 100.00 {/*<span><del>Tk.120.00</del></span>*/} </h2> 
                                        <p><Link to="/checkout">Buy Now</Link></p>
                                    </div>
                                <p className={styles.ProductTitle}><Link to="/productdetails">This elegant, 100% viscose Kabli This elegant, 100% viscose</Link></p>
                                </div>

                                <div className={styles.ProductTools}>
                                    <p className={styles.Wishlist}><Link to="/wishlist"> <BsHeart /></Link></p>
                                    <p className={styles.Search}><a href="#"><BsSearch /></a></p>
                                    <p className={styles.AddToCard}><Link to="/cart"><BsCart2 /></Link></p>
                                </div>

                            </Card.Body>
                            </Card>
                        </Link>
                        </Col>


                    </Row>
                    
                </Container>
            </Fragment>
         );
    }
}
 
export default Product;