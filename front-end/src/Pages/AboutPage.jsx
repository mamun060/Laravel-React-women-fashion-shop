import React, { Component, Fragment } from 'react';
import TopNavbar from '../Components/common/TopNavbar';
import NavHeader from '../Components/common/NavHeader';
import About from '../Components/others/About';
import TopFooter from '../Components/common/TopFooter';
import CopyRight from '../Components/common/CopyRight';
import Announcement from '../Components/common/Announcement';

class AboutPage extends Component {
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

                <About />

                <TopFooter />
                <CopyRight />
            </Fragment>
         );
    }
}
 
export default AboutPage;