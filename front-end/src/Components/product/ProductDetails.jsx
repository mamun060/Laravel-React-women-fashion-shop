/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment} from 'react'
import {Container, Row, Col, Button, Accordion, Card} from 'react-bootstrap';
import one from '../../Assets/images/product/01.jpg';
import two from '../../Assets/images/product/02.jpg';
import three from '../../Assets/images/product/03.jpg';
import four from '../../Assets/images/product/04.jpg';
import styles from '../../Assets/css/ProductDetails.module.css';
import { BsHeart } from "react-icons/bs";
import Product from './Product';
import ProductContent from './ProductContent';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                 <Container>
                     <Row>
                         <Col xl={1} lg={1} md={1} sm={3} xs={3}>
                             <div className={styles.ProductGallery}>
                                 <div className={styles.ProductImgList}>
                                     <ul>
                                         <li><img src={one} alt=''/></li>
                                         <li><img src={two} alt=''/></li>
                                         <li><img src={three} alt=''/></li>
                                         <li><img src={four} alt=''/></li>
                                     </ul>
                                 </div>
                             </div>
                         </Col>
                         <Col lg={5} xl={5} md={5} sm={9} xs={9}>
                             <div className={styles.ProductBigImages}>
                                 <img src={one} alt='' />
                             </div>
                         </Col>
                         <Col lg={6} xl={6} md={6} sm={12} xs={12}>
                             <div className={styles.ProductInfo}>
                                 <div className={styles.ProductTitle}>
                                     <h2>Paislay print shop Lorem ipsum dolor sit amet.<span>icon</span></h2>
                                 </div>
                                 <div className={styles.ProductPrice}>
                                     <p>500.00 tk <span><del>500.00 tk</del></span></p>
                                 </div>
                                 <div className={styles.ProductColor}>
                                     <h2>Color:</h2>
                                     <ul>
                                         <li><p><input className={styles.Black} type="radio" /></p></li>
                                         <li><p><input className={styles.White} type="radio" /></p></li>
                                         <li><p><input className={styles.Green} type="radio" /></p></li>
                                         <li><p><input className={styles.Red} type="radio" /></p></li>
                                     </ul>
                                 </div>
                                 <div className={styles.ProductSize}>
                                     <h2>Size:</h2>
                                     <ul>
                                         <li><p>S</p></li>
                                         <li><p>M</p></li>
                                         <li><p>L</p></li>
                                         <li><p>XL</p></li>
                                     </ul>
                                 </div>
                                 <div className={styles.ProductButton}>
                                 <Button variant="primary"><Link to="#">Add To Card</Link></Button>
                                 <Button variant="danger"><Link to="/checkout">Buy Now</Link></Button>
                                 <a href='#'><BsHeart /></a>
                                 </div>
                             

                             <div className={styles.ProductContentSection}>

                             <Accordion>
                                <Accordion.Item eventKey="0">
                                    
                                    <Accordion.Header>
                                        <h2>Size Guide</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p className={styles.ProductGuide}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><h2>Product Short Description</h2></Accordion.Header>
                                    <Accordion.Body>
                                <p className={styles.ProductDescription}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                </Accordion>

                            </div>

                            </div>
                         </Col>
                     </Row>

                     <Row>
                         <Col md={12}>
                             <ProductContent />
                         </Col>
                     </Row>
                </Container>

                <Container fluid={true}>
                  <Row>
                        <Col md={12}>
                            <h2 className={styles.RelatatedProductTitle}>Releted Products</h2>
                             <Product />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
 
export default ProductDetails;