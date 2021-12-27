import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

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
                            This is address component  
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
 
export default Address;