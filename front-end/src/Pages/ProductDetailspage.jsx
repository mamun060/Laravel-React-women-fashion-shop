import React, { Component, Fragment } from 'react'
import TopNavbar from '../Components/common/TopNavbar';
import NavHeader from '../Components/common/NavHeader';
import TopFooter from '../Components/common/TopFooter';
import CopyRight from '../Components/common/CopyRight';
import styles from '../../src/Assets/css/responsive.module.css';
import Announcement from '../Components/common/Announcement';
import ProductDetails from '../Components/product/ProductDetails';

class ProductDetailsPage extends Component {
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

                 </div>
                 
                  <ProductDetails />
                <TopFooter />
                <CopyRight />
            </Fragment>
         );
    }
}
 
export default ProductDetailsPage;