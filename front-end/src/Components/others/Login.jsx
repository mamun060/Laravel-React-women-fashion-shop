import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../Assets/css/login.module.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                <Container>

                    <Row>
                    <Col xl={2} lg={2} md={2}> </Col>

                           <Col xl={8} lg={8} md={12} sm={12} xm={12}>
                               <div className={styles.LoginFormWrap}>
                                   <div className={styles.btnStyle}>
                                       <div className={styles.OneButton}>
                                           <Link to="/login"><p>Login</p></Link>
                                       </div>
                                       <div className={styles.TwoButton}>
                                           <Link to="/signin"><p>Register</p></Link>
                                       </div>
                                   </div>

                                   <div className={styles.FormStyling}>
                                   <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className={styles.LoginLabel}>Email address</Form.Label>
                                            <Form.Control className={styles.LoginInput} type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label className={styles.LoginLabel}>Password</Form.Label>
                                            <Form.Control className={styles.LoginInput} type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check className={styles.checkBox} type="checkbox" label="Check me out" />
                                        </Form.Group>
                                        <Button className={styles.LoginButton} variant="primary" type="submit">
                                            Login
                                        </Button>
                                    </Form>
                                   </div>

                               </div>
                           </Col>

                           <Col xl={2} lg={2} md={2}> </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
 
export default Login;