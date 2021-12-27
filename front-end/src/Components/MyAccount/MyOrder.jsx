/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react'
import {Container, Row, Col, Tab, Nav} from 'react-bootstrap';
import MyAccount from './MyAccount';
import Profile from './Profile';
import styles from '../../Assets/css/MyAccount.module.css';
import Address from './Address';
//import ChangePassword from './ChangePassword';
import Registration from '../others/Registration';
import Login from '../others/Login';

class MyOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                 <Container className={styles.MainContainer}>

                 <Row>
                     <Col md={12}>
                     <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                   <Nav.Link eventKey="first">My Account</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">My Order</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="three">My Profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four">My Address</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five">My Wishlist</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="six">Change Password</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seven">Logout</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                     <MyAccount />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Profile />
                                </Tab.Pane>
                                <Tab.Pane eventKey="three">
                                    <Profile />
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <Address />
                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                    <Profile />
                                </Tab.Pane>
                                <Tab.Pane eventKey="six">
                                    <Registration />
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven">
                                    <Login />
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                        </Tab.Container>
                     </Col>
               
                 </Row>
                 </Container>
            </Fragment>
        );
    }
}
 
export default MyOrder;