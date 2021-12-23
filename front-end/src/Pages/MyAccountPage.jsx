import React, { Component, Fragment } from 'react'
import Announcement from '../Components/common/Announcement';
import CopyRight from '../Components/common/CopyRight';
import TopHeader from '../Components/common/NavHeader';
import TopFooter from '../Components/common/TopFooter';
import TopNavbar from '../Components/common/TopNavbar';
import UserDashboard from '../Components/MyAccount/UserDashboard';

class MyAccountPage extends Component {
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

                <UserDashboard />

                <TopFooter />
                <CopyRight /> 
            </Fragment>
        );
    }
}
 
export default MyAccountPage;