import React, { Component, Fragment } from 'react'
import Announcement from '../Components/common/Announcement';
import CopyRight from '../Components/common/CopyRight';
import NavHeader from '../Components/common/NavHeader';
import TopFooter from '../Components/common/TopFooter';
import TopNavbar from '../Components/common/TopNavbar';
import Checkout from '../Components/others/Checkout';
import MobileNavbar from '../Components/common/MobileNavbar';
import MobileTopBar from '../Components/common/MobileTopBar';
import styles from '../../src/Assets/css/responsive.module.css';

class CheckoutPage extends Component {
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

                <Checkout />
                <TopFooter />
                <CopyRight />
            </Fragment>
        );
    }
}
 
export default CheckoutPage;