import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/MyAccount.module.css';

class MyAccount extends Component {
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
                       
                            <div>
                                <div className={styles.rightContentWrapping}>
                                
                                    <div className={styles.CardHeader}>
                                        <h5 className={styles.CardTitle}>MY ORDERS</h5>
                                    </div>

                                    <div className={styles.cardBody}>
                                        <table>
                                            <thead className={styles.TableStyling}>
                                                <tr className={styles.tableRowScrolling}>
                                                    <th>Order No.</th>
                                                    <th>Details</th>
                                                    <th>Order Date</th>
                                                    <th>Status</th>
                                                    <th>Total Price </th>
                                                    <th>Delivery Charge</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                    
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
 
export default MyAccount;