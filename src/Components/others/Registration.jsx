import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from '../../Assets/css/login.module.css';
import { Link } from 'react-router-dom';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                <Container>
                <Row>
                    <Col xl={2} lg={2} md={2}>
                           
                           </Col>
                           <Col xl={8} lg={8} md={12} sm={12} xm={12}>
                               <div className={styles.LoginFormWrap}>
                               <div className={styles.btnStyle}>

                                       <Link to="/login" className={styles.OneButton}>
                                           <p>Login</p>
                                       </Link>
                                       <Link to="/signin" className={styles.TwoButton}>
                                           <p>Register</p>
                                       </Link>

                                   </div>
                                    
                                    <div className={styles.FormStyling}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className={styles.LoginLabel}>Your Name</Form.Label>
                                            <Form.Control className={styles.LoginInput} type="text" placeholder="Your Name" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className={styles.LoginLabel}>Email address</Form.Label>
                                            <Form.Control className={styles.LoginInput} type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label className={styles.LoginLabel}>Password</Form.Label>
                                            <Form.Control className={styles.LoginInput} type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label className={styles.LoginLabel}>Confirm Password</Form.Label>
                                            <Form.Control className={styles.LoginInput} type="password" placeholder="Confirm Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check className={styles.checkBox} type="checkbox" label="Agree with our all terms and condition" />
                                        </Form.Group>
                                        <Button className={styles.LoginButton} variant="primary" type="submit">
                                            Sign-In
                                        </Button>
                                    </Form>
                                    </div>

                               </div>
                           </Col>
                           <Col xl={2} lg={2} md={2}>
                             
                           </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
 
export default Registration;