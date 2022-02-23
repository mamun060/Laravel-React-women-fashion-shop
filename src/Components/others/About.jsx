import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../Assets/css/About.module.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <Container>
                   <Row>
                     <Col>
                       <div className={styles.AboutWrap}>
                           <h2 className={styles.AboutTitle}>About Us</h2>
                           <p className={styles.AboutContent}>
                           YELLOW, the trendiest fashion brand from Bangladesh, 
                           is mostly distinguished for its true international quality 
                           designs and fabrics. We are inspired by our customers- souls 
                           full of unconventional fashion senses. As a retailer of our 
                           parent brand BEXIMCO, we started our journey in 2004 and now 
                           we have 19 stores across Bangladesh and Pakistan and a 24/7 online store. 
                           Since origin, we have been offering world class designs at amazing value price. 
                           Our product line includes a wide range of fashion clothing, fragrance, 
                           and accessories for men, women and children; textiles for home decoration; 
                           avant-garde ceramic items; paintings; books; and many more.

                            Explore YELLOW and look through our windows for contemporary global fashion trends.
                           </p>
                       </div>
                     </Col>
                   </Row>
                </Container>
            </Fragment>
        );
    }
}
 
export default About;