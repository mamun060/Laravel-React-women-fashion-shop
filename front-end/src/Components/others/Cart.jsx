/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react'
import {Container} from 'react-bootstrap';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
              <Container>
                   <p>this is cart page</p>
              </Container>
            </Fragment>
         );
    }
}
 
export default Cart;