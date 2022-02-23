/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, Fragment } from 'react'
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/topnavbar.module.css';
import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";


class TopNavbar extends Component {
    render() { 
        return (
            <Fragment>
               <Container fluid={true} className={styles.TopContainer}>
                   <Row>
                       <Col xl={3} md={3}>
                           <div className={styles.logo}>
                               <h2><Link to="/">LOGO</Link></h2>
                           </div>
                       </Col>

                       <Col xl={6} md={6}>
                          <div className={styles.SearchSection}>
                              <input className={styles.inputs} type="text" name="name" placeholder='search' /><BsSearch/>
                          </div>
                       </Col>

                       <Col xl={3} md={3}>
                           <div className={styles.HeaderIcons}>
                                <p className={styles.HeaderIcon}><Link to="/wishlist"><BsHeart /></Link></p>
                                <p className={styles.HeaderIcon}><Link to="/cart"><BsCart2 /></Link></p>
                                <p className={styles.HeaderIcon}><Link to="/login"><MdManageAccounts /></Link> </p>
                            </div>
                       </Col>

                   </Row>
               </Container>
            </Fragment>
        );
    }
}
 
export default TopNavbar;