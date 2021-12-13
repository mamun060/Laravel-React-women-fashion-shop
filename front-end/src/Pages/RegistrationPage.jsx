import React, { Component, Fragment } from 'react';
import TopNavbar from '../Components/common/TopNavbar';
import NavHeader from '../Components/common/NavHeader';
import TopFooter from '../Components/common/TopFooter';
import CopyRight from '../Components/common/CopyRight';
import Registration from '../Components/others/Registration';

class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                 <TopNavbar />
                   <NavHeader /> 
                     <Registration />
                   <TopFooter />
                <CopyRight />
            </Fragment>
         );
    }
}
 
export default RegistrationPage;