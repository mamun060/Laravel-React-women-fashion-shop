/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, Fragment } from 'react'
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/topnavbar.module.css';

class TopNavbar extends Component {
    render() { 
        return (
            <Fragment>
               <Container fluid={true} className={styles.TopContainer}>
                   <Row>
                       <Col lg={4} xl={4}>
                           <div className={styles.logo}>
                               <h2><Link to="/">LOGO</Link></h2>
                           </div>
                       </Col>

                       <Col lg={4} xl={4}>
                          <div className={styles.search}>
                              <input className={styles.inputs} type="text" name="name" placeholder='search' />
                          </div>
                       </Col>

                       <Col lg={4} xl={4}>
                           <div className={styles.btnpostion}>
                                <p className={styles.signin}><Link to="/login">SignIn</Link> </p>
                                <p className={styles.cart}><Link to="/cart">Cart</Link></p>
                            </div>
                       </Col>

                   </Row>
               </Container>
            </Fragment>
        );
    }
}
 
export default TopNavbar;