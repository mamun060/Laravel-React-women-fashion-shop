import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/MyAccount.module.css';


class Address extends Component {
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
                                        <h5 className={styles.CardTitle}>MY ADDRESS</h5>
                                    </div>

                                    <div className={styles.cardBody}>
                                        <table>
                                            <thead className={styles.AddressStyling}>
                                                <tr className={styles.AddressRowScrolling}>
                                                    <th> No.</th>
                                                    <th>Name</th>
                                                    <th>Type</th>
                                                    <th>Address</th>
                                                    <th>Area</th>
                                                    <th>Phone NO</th>
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
 
export default Address;