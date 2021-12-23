/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import styles from  '../../Assets/css/MyAccount.module.css';

class MyOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                 <Container>
                 <Row>
                     <Col md={3}>
                         <div className={styles.leftSide}>
                             <div>
                                 <ul>
                                     <li><a>My Account</a></li>
                                     <li><a>My Order</a></li>
                                     <li><a>My Profile</a></li>
                                     <li><a>My Address</a></li>
                                     <li><a>Chnage Password</a></li>
                                     <li><a>My Wishlist</a></li>
                                 </ul>
                             </div>
                         </div>
                     </Col>
                     <Col md={9}>
                         <div className={styles.rightSide}>

                         </div>
                     </Col>
                 </Row>
                 </Container>
            </Fragment>
        );
    }
}
 
export default MyOrder;