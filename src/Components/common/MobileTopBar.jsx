import React, { Component } from 'react'
import { Fragment } from 'react';
import { Container, Row} from 'react-bootstrap';
import styles from '../../Assets/css/MobileHeader.module.css';
import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';

class MobileTopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row className={styles.MobileTopBarDevide}>

                        <div>
                          <div className={styles.SearchSection}>
                              <input className={styles.inputs} type="text" name="name" placeholder='search' /><BsSearch/>
                          </div>
                        </div>

                        <div>
                           <div className={styles.HeaderIcons}>
                                <p className={styles.HeaderIcon}><Link to="/wishlist"><BsHeart /></Link></p>
                                <p className={styles.HeaderIcon}><Link to="/cart"><BsCart2 /></Link></p>
                                <p className={styles.HeaderIcon}><Link to="/login"><MdManageAccounts /></Link> </p>
                            </div>
                        </div>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
 
export default MobileTopBar;