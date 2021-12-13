import React, { Component, Fragment } from 'react'
import TopNavbar from '../Components/common/TopNavbar';
import NavHeader from '../Components/common/NavHeader';
import Product from '../Components/product/Product';
import TopFooter from '../Components/common/TopFooter';
import CopyRight from '../Components/common/CopyRight';
import styles from '../../src/Assets/css/responsive.module.css';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <div className={styles.Desktop}>
                   <TopNavbar />
                   <NavHeader /> 
                </div>
                
                 <div className={styles.Mobile}>
                     
                 </div>
                 
                   <Product />
                <TopFooter />
                <CopyRight />
            </Fragment>
         );
    }
}
 
export default ProductPage;