import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

class ChangePassword extends Component {
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
                            this is changepassword commponent 
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
 
export default ChangePassword;