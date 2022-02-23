import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import styles from '../../Assets/css/MyAccount.module.css';

class Profile extends Component {
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
                                     <h4>Personal Information</h4>
                                 </div>

                                 <div className={styles.formSection}>
                                 <Form>

                                    <Form.Group className={styles.FormLabels} controlId="formBasicEmail">
                                        <label>Your Name</label>
                                        <Form.Control type="text" placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group className={styles.FormLabels}  controlId="formBasicEmail">
                                        <label>Phone</label>
                                        <Form.Control type="number" placeholder="Enter Phone" />
                                    </Form.Group>

                                    <Form.Group className={styles.FormLabels} controlId="formBasicEmail">
                                        <label>Your Email</label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className={styles.FormLabels}>
                                        <label>Profile Images</label>
                                        <Form.Control type="file" />
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
 
export default Profile;