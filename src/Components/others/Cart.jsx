/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/Cart.module.css';
import images from '../../Assets/images/product/01.jpg';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
              <Container className={styles.CartPageContainer}>
                 <Row>
                 <Col Col lg={8} xl={8} md={8} xm={12}>
                     <div className={styles.LeftSide}>
                         <Row className={styles.MobileCartRowStyle}>
                             <h4 className={styles.CartPageLeftTitle}>My Cart</h4>
                             <Col md={4}>
                                 <div className={styles.ProductContent}>
                                     <h2>Products</h2>
                                     <img src={images} />
                                     <div className={styles.productTitle}>
                                         <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
                                     </div>
                                 </div>
                             </Col>

                             <Col md={2}>
                                <div className={styles.ProductContent}>
                                     <h2>Unit Price</h2>
                                     <div className={styles.productPrice}>
                                         <p>200.00 BDT</p>
                                     </div>
                                 </div>
                             </Col>

                             <Col md={3}>
                                <div className={styles.ProductContent}>
                                     <h2>Quantity</h2>
                                     <div className={styles.productQuantity}>
                                         <input type="number" min='1' max='20' placeholder='1' />
                                     </div>
                                 </div>
                             </Col>

                             <Col md={2}>
                                <div className={styles.ProductContent}>
                                     <h2>Subtotal</h2>
                                     <div className={styles.productPrice}>
                                         <p>BDT 200.00</p>
                                     </div>
                                 </div>
                             </Col>
                             <Col md={1}>
                                 <div className={styles.removeIcon}>
                                     <MdDelete />
                                 </div>
                             </Col>
                         </Row>

                     </div>
                </Col>

                <Col lg={4} xl={4} md={4} xm={12}>
                    <div className={styles.RightSide}>
                        <h4 className={styles.CartPageRightTitle}>Summary</h4>

                        <div className={styles.RightSectionOne}>
                            <h4>My Cart</h4>
                            <p>Start adding to your cart</p>
                        </div>

                        <div className={styles.RightSectionTwo}>
                            <div>
                                <p>Price (2 items)</p>
                                <p>Delivary Charges</p>
                            </div>
                            <div>
                                <p>1000.00 BDT</p>
                                <p>Will Be Added</p>
                            </div>
                        </div>

                        <div className={styles.RightSectionThree}>
                            <h4>Total Amount</h4>
                            <p>1000.00 BDT</p>
                        </div>

                        <div className={styles.CheckoutButton}>
                            <Link to="/checkout">Checkout</Link>
                        </div>

                    </div>
                </Col>

                 </Row>

              </Container>
            </Fragment>
         );
    }
}
 
export default Cart;