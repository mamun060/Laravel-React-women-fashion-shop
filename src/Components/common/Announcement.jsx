/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/announcement.module.css';
import { MdLocationPin } from "react-icons/md";
import { AiFillMobile, AiOutlineQuestionCircle} from "react-icons/ai";

class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <Container fluid={true}>
                    <Row className={styles.announcement}>
                        <Col className={styles.left} md={6} sm={12}>
                           <p>Super Deal! Free Shipping on Orders Over $50</p>
                        </Col>
                        <Col className={styles.right} md={6} sm={12}>
                            <ul>
                                <li><a href='#'><AiFillMobile /> Get App</a></li>
                                <li><a href='#'><MdLocationPin /> Store Location</a></li>
                                <li><a href='#'><AiOutlineQuestionCircle/> FAQ</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
         );
    }
}
 
export default Announcement;