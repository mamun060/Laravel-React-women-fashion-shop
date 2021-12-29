import React, { Component, Fragment } from 'react'
import TopNavbar from '../Components/common/TopNavbar';
import NavHeader from '../Components/common/NavHeader';
import TopFooter from '../Components/common/TopFooter';
import CopyRight from '../Components/common/CopyRight';
import Announcement from '../Components/common/Announcement';
import Cart from '../../src/Components/others/Cart';
import MobileNavbar from '../Components/common/MobileNavbar';
import MobileTopBar from '../Components/common/MobileTopBar';
import styles from '../../src/Assets/css/responsive.module.css';

class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          
                <Fragment>
                <div className={styles.Desktop}>
                    <Announcement />
                    <TopNavbar />
                    <NavHeader />
                </div>
                
                 <div className={styles.Mobile}>
                     <MobileTopBar />
                     <MobileNavbar />
                 </div>

                   <Cart />

                   <TopFooter />
                <CopyRight />
                
            </Fragment>
         );
    }
}
 
export default CartPage;