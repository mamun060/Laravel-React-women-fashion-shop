import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import styles from '../../Assets/css/MyAccount.module.css';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col md={12}>
                        <div className={styles.ProfileContainer}>

                            <div className={styles.ProfileTitle}>
                                <h4>Change Password</h4>
                            </div>

                            <div className={styles.formSection}>
                            <Form>

                            <Form.Group className={styles.FormLabels} controlId="formBasicEmail">
                                <label>Previous Password</label>
                                <Form.Control type="password" placeholder='Previous Password'/>
                            </Form.Group>

                            <Form.Group className={styles.FormLabels}  controlId="formBasicEmail">
                                <label>New Password</label>
                                <Form.Control type="password" placeholder='New Password'/>
                            </Form.Group>

                            <Form.Group className={styles.FormLabels} controlId="formBasicEmail">
                                <label>Confirm Password</label>
                                <Form.Control type="password" placeholder='Confirm Password'/>
                            </Form.Group>

                            <Button className={styles.ProfileButton} variant="primary" type="submit">
                                Update
                            </Button>

                            </Form>
                            </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
 
export default ChangePassword;