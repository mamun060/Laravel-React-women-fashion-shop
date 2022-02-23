import React, { Component, Fragment } from 'react';
import TopNavbar from '../Components/common/TopNavbar';
import NavHeader from '../Components/common/NavHeader';
import About from '../Components/others/About';
import TopFooter from '../Components/common/TopFooter';
import CopyRight from '../Components/common/CopyRight';
import Announcement from '../Components/common/Announcement';
import styles from '../../src/Assets/css/responsive.module.css';
import MobileTopBar from '../Components/common/MobileTopBar';
import MobileNavbar from '../Components/common/MobileNavbar';

class AboutPage extends Component {
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

                <About />

                <TopFooter />
                <CopyRight />
            </Fragment>
         );
    }
}
 
export default AboutPage;