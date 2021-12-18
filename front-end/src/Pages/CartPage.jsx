import React, { Component, Fragment } from 'react'
import TopNavbar from '../Components/common/TopNavbar';
import NavHeader from '../Components/common/NavHeader';
import TopFooter from '../Components/common/TopFooter';
import CopyRight from '../Components/common/CopyRight';
import Announcement from '../Components/common/Announcement';
import Cart from '../../src/Components/others/Cart';

class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          
                <Fragment>
                    <Announcement />
                 <TopNavbar />
                   <NavHeader />

                   <Cart />

                   <TopFooter />
                <CopyRight />
                
            </Fragment>
         );
    }
}
 
export default CartPage;