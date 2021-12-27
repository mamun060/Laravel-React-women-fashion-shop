import React, { Component, Fragment } from 'react'
import Announcement from '../common/Announcement';
import CopyRight from '../common/CopyRight';
import TopHeader from '../common/NavHeader';
import TopFooter from '../common/TopFooter';
import TopNavbar from '../common/TopNavbar';
import MyOrder from './MyOrder';


class MyOrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                <Announcement />
                <TopHeader />
                <TopNavbar />

                <MyOrder />

                <TopFooter />
                <CopyRight />
            </Fragment>
        );
    }
}
 
export default MyOrderPage;