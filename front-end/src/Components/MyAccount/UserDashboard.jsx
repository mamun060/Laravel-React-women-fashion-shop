import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/MyAccount.module.css';
import { Link } from 'react-router-dom';


class UserDashboard extends Component {
constructor(props) {
super(props);
this.state = {

}
}
render() {
return (
<Container className={styles.MainContainer}>
    <Fragment>
        <Row>

            <Col md={3}>
            <div className={styles.leftSide}>
       
                <h2 className={styles.FisrtMenuTitle}><Link to="#">My Account</Link></h2> 
                
                <div className={styles.HorizentalStyle}>
                    <ul>
                       
                        <li>
                            <Link to="#">My Order</Link>
                        </li>
                        <li>
                            <Link to="#">My Profile</Link>
                        </li>
                        <li>
                            <Link to="#">My Address</Link>
                        </li>
                        <li>
                            <Link to="#">Chnage Password</Link>
                        </li>
                        <li>
                            <Link to="#">My Wishlist</Link>
                        </li>
                        <li>
                            <Link to="#">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </Col>

            <Col md={9}>
            <div className={styles.rightSide}>
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
    </Fragment>
</Container>
);
}
}

export default UserDashboard;