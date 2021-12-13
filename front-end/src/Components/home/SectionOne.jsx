import { Component, Fragment } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/HomeSection.module.css';

class SectionOne extends Component {
    constructor(props){
        super();
        this.state = {

        }
    }
    
    render() {
        const ImgOne = this.props.imgOne
        const ImgTwo = this.props.imgTwo
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col className={styles.containers} xl={6} lg={6} md={6} sm={12}>
                            <div>
                               <img className={styles.LeftImages} src={ImgOne} alt="" />
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12}>
                            <div>
                               <img className={styles.RightImages} src={ImgTwo} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default SectionOne;
