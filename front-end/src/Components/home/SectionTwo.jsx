import { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../Assets/css/HomeSection.module.css';
import Three from '../../Assets/images/03.jpg';
import Four from '../../Assets/images/04.jpg';
import Five from '../../Assets/images/05.jpg';
import Six from '../../Assets/images/06.jpg';

class SectionTwo extends Component {
    render() { 
        return (
            <Fragment>
                <Container fluid={true}>
                   <Row>
                   <Col lg={3} xl={3} md={3} sm={6}>
                        <img className={styles.SecondBanner} src={Three} alt="" />
                    </Col>
                    <Col lg={3} xl={3} md={3} sm={6}>
                        <img className={styles.SecondBanner} src={Four} alt="" />
                    </Col>
                    <Col lg={3} xl={3} md={3} sm={6}>
                         <img className={styles.SecondBanner} src={Five} alt="" />
                    </Col>
                    <Col lg={3} xl={3} md={3} sm={6}>
                       <img className={styles.SecondBanner} src={Six} alt="" />
                    </Col>
                   </Row>
                </Container>
            </Fragment>
        );
    }
}
 
export default SectionTwo;