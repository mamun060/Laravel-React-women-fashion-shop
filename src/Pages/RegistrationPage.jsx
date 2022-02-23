import React, { Component, Fragment } from 'react';
import TopNavbar from '../Components/common/TopNavbar';
import NavHeader from '../Components/common/NavHeader';
import TopFooter from '../Components/common/TopFooter';
import CopyRight from '../Components/common/CopyRight';
import Registration from '../Components/others/Registration';
import Announcement from '../Components/common/Announcement';
import MobileTopBar from '../Components/common/MobileTopBar';
import MobileNavbar from '../Components/common/MobileNavbar';
import styles from '../../src/Assets/css/responsive.module.css';

class RegistrationPage extends Component {
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

                     <Registration />
                   <TopFooter />
                <CopyRight />
            </Fragment>
         );
    }
}
 
export default RegistrationPage;