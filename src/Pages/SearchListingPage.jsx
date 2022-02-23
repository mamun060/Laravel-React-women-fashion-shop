import React, { Component, Fragment } from 'react'
import Announcement from '../Components/common/Announcement';
import CopyRight from '../Components/common/CopyRight';
import NavHeader from '../Components/common/NavHeader';
import TopFooter from '../Components/common/TopFooter';
import TopNavbar from '../Components/common/TopNavbar';
import SearchListing from '../Components/Search/SearchListing';
import MobileTopBar from '../Components/common/MobileTopBar';
import MobileNavbar from '../Components/common/MobileNavbar';
import styles from '../../src/Assets/css/responsive.module.css';

class SearchListingPage extends Component {
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

                <SearchListing />
                <TopFooter />
                <CopyRight />
            </Fragment>
        );
    }
}
 
export default SearchListingPage;