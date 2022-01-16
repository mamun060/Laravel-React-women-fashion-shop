import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/Wishlist.module.css';

class Wishlist extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                <Container className={styles.MainContainer}>
                    <Row>

                        <Col md={1}>

                        </Col>

                        <Col md={10} className={styles.MiddleSectionContainer}>
                            <h2>My WishLIst</h2>
                            <Row className={styles.innerRow}>
                                <Col md={3} className={styles.MobileColWidth}>
                                    <div className={styles.sectionTitle}>
                                        <h4>Product</h4>
                                    </div>
                                </Col>

                                <Col md={3} className={styles.MobileColWidth}>
                                    <div className={styles.sectionTitle}>
                                        <h4>Unit Price</h4>
                                    </div>
                                </Col>

                                <Col md={3} className={styles.MobileColWidth}>
                                    <div className={styles.sectionTitle}>
                                        <h4>Action</h4>
                                    </div>
                                </Col>

                                <Col md={3} className={styles.MobileColWidth}>
                                    <div className={styles.sectionTitle}>
                                        <h4>Status</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col md={1}>

                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}
 
export default Wishlist;