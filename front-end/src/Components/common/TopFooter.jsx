/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Component, Fragment } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/Footer.module.css';

class TopFooter extends Component {
    render() { 
        return (
            <Fragment>
                <Container fluid={true} className={styles.FooterContainer}>
                    <Row>
                        <Col lg={3} xl={3} md={3} sm={6}>
                            <div>
                                <h2 className={styles.title}>About</h2>
                                <ul className={styles.UlStyle}>
                                    <li className={styles.LiStyle}><a href='#'>About Us</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Delivary Information</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Exchange Policy</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Privacy Policy</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Career</a></li>
                                </ul>
                            </div>
                        </Col>
                        
                        <Col lg={3} xl={3} md={3} sm={6}>
                            <div>
                                <h2 className={styles.title}>About</h2>
                                <ul className={styles.UlStyle}>
                                    <li className={styles.LiStyle}><a href='#'>About Us</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Delivary Information</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Exchange Policy</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Privacy Policy</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Career</a></li>
                                </ul>
                            </div>
                        </Col>
                        
                        <Col lg={3} xl={3} md={3} sm={6}>
                            <div>
                                <h2 className={styles.title}>About</h2>
                                <ul className={styles.UlStyle}>
                                    <li className={styles.LiStyle}><a href='#'>About Us</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Delivary Information</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Exchange Policy</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Privacy Policy</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Career</a></li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} xl={3} md={3} sm={6}>
                            <div>
                                <h2 className={styles.title}>About</h2>
                                <ul className={styles.UlStyle}>
                                    <li className={styles.LiStyle}><a href='#'>About Us</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Delivary Information</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Exchange Policy</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Privacy Policy</a></li>
                                    <li className={styles.LiStyle}><a href='#'>Career</a></li>
                                </ul>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}
 
export default TopFooter;
