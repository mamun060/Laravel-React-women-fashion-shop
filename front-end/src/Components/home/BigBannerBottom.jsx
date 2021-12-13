import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../Assets/css/HomeSection.module.css';

class BigBannerBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const Banner = this.props.BannerImg
        return ( 
            <Fragment>
                <Container fluid={true} className={styles.BigBannerContainer}>
                   <Row>
                        <Col xl={12} lg={12} md={12} sm={12}>
                            <div className={styles.BottomBigBanner}>
                                <img className={styles.BigBannerImg} src={Banner} alt="" />
                            </div>
                        </Col>
                   </Row>
                </Container>
            </Fragment>
         );
    }
}
 
export default BigBannerBottom;