/* eslint-disable jsx-a11y/anchor-is-valid */
import  { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from '../../Assets/css/NavHeader.module.css';

class TopHeader extends Component {
    render() { 
        return (
            <Fragment>
                <Container fluid={true} className={styles.MainNavContainer}>
                    <div className={styles.NavWrapping}>
                        <nav className={styles.NavMain}>
                            <ul className={styles.UnderLine}>
                                <li className={styles.ListIineStyle}><Link to="/">Home</Link></li>
                                <li className={styles.ListIineStyle}><Link to="/about">About</Link></li>
                                <li className={`${styles.ListIineStyle} ${styles.DropdownContainer}`}><Link to="/product">Product</Link>
                                    <ul className={`${styles.UnderLine} ${styles.DropdownStyle}`}>
                                    <li className={styles.ListIineStyle}><a>Home</a></li>
                                    <li className={styles.ListIineStyle}><a>About</a></li>
                                    <li className={styles.ListIineStyle}><a>Service</a></li>
                                    <li className={styles.ListIineStyle}><a>Product</a></li>
                                    <li className={styles.ListIineStyle}><a>Portfolio</a></li>
                                    <li className={styles.ListIineStyle}><a>Contact Us</a></li>
                                    </ul>
                                </li>
                                <li className={styles.ListIineStyle}><Link to="#">Portfolio</Link></li>
                                <li className={styles.ListIineStyle}><Link to="#">Contact Us</Link></li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </Fragment>
        );
    }
}
 
export default TopHeader;
