/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../Assets/css/Footer.module.css';

class CopyRight extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <Container fluid={true} className={styles.CopyRightContainer}>
                    <div className={styles.CopyRightStyle}>
                        <p><a href={'#'}>© 2020 YELLOW by BEXIMCO. All Rights Reserved.</a></p>
                        <img src="https://shasmul.com/wp-content/uploads/2021/08/Footer-Logo.png" alt=""></img>
                    </div>
                </Container>
            </Fragment>
         );
    }
}
 
export default CopyRight;