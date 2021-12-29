import React, { Component, Fragment } from 'react'
import { Container, Row, Navbar, Offcanvas, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import styles from '../../Assets/css/MobileHeader.module.css';
import { Link } from 'react-router-dom';

class MobileNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <Fragment>
                <Container className={styles.NavRowContainer}>

                    <Row className={styles.NavRowStyling}>

                        <div className={styles.LogoSide}>
                           <div className={styles.logo}>
                               <h2><Link to="/">LOGO</Link></h2>
                           </div>
                        </div>

                        <div className={styles.MobileMenuSide}>
                            <div className={styles.MobileMenuDiv}>
                            <Navbar expand={false}>
                                <Container fluid>
                                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                                   
                                    <Navbar.Offcanvas
                                    id="offcanvasNavbar"
                                    aria-labelledby="offcanvasNavbarLabel"
                                    placement="end"
                                    >

                                    <Offcanvas.Body>
                                        <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                        <Nav.Link> <Link to="/about"> About </Link> </Nav.Link>
                                        <Nav.Link> <Link to="/product">Product</Link> </Nav.Link>
                                        <Nav.Link> <Link to="/contact">Contact</Link> </Nav.Link>
                                        <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                            <NavDropdown.Item to="#">Action</NavDropdown.Item>
                                            <NavDropdown.Item to="#">Another action</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item to="#">
                                            Something else here
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        </Nav>
                                     
                                    </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Container>
                                </Navbar>
                            </div>
                        </div>

                    </Row>

                </Container>
            </Fragment>
        );
    }
}
 
export default MobileNavbar;