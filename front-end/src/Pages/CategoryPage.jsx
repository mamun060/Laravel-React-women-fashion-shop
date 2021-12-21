import React, { Component, Fragment } from 'react'
import Category from '../Components/Category/Category';
import Announcement from '../Components/common/Announcement';
import CopyRight from '../Components/common/CopyRight';
import TopHeader from '../Components/common/NavHeader';
import TopFooter from '../Components/common/TopFooter';
import TopNavbar from '../Components/common/TopNavbar';

class CategoryPage extends Component {
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
                <Category />
                <TopFooter />
                <CopyRight />
            </Fragment>
        );
    }
}
 
export default CategoryPage;