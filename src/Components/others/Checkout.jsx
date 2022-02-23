/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button, Table} from 'react-bootstrap';
import styles from '../../Assets/css/Checkout.module.css';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                <Container className={styles.CheckoutContainer}>
                    

                    <Form className={styles.MobileFormStyling}>
                     <Row>
                        <Col md={7} sm={7}>
                            <div className={styles.leftTitle}>
                                <h2>Billing Address</h2>
                            </div>
                        
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type='number' placeholder="Address...." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Address...." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address </Form.Label>
                                <Form.Control placeholder="Address...." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Address...." />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Agree with us" />
                            </Form.Group>

                        </Col>

                        <Col md={5} sm={5}>
                            <div className={styles.RightSide}>

                            <div className={styles.RightTitle}>
                                <h2>Your Order</h2>

                                <Table className={styles.TableContainer} striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>Product</th>
                                        <th>Total</th>
                                        </tr>
                                    </thead>
                                
                                    <tbody>
                                        <tr>
                                        <th>Happy Ninja * 1</th>
                                        <th>$20.00</th>
                                        </tr>
                                   
                                        <tr>
                                        <td>SubTotal</td>
                                        <td>$20.00</td>
                                        </tr>
                                   
                                        <tr>
                                        <td>Shipping</td>
                                        <td>Enter your shipping address to view shipping options</td>
                                        </tr>
                                   
                                        <tr>
                                        <td>Total</td>
                                        <td>$20.00</td>
                                        </tr>
                                        
                                    </tbody>
                            
                                    </Table>
                            </div>
                            <Button className={styles.SubmitButton} variant="primary" type="submit">
                                Place Order
                            </Button>
                            </div>
                        </Col>

                        </Row>
                        </Form>
                    
                </Container>
            </Fragment>
        );
    }
}
 
export default Checkout;