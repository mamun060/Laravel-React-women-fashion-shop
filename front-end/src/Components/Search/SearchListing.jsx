import React, { Component, Fragment } from 'react'
import Product from '../product/Product';
import styles from '../../Assets/css/SearchListing.module.css';

class SearchListing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                <div className={styles.SearchListingHeading}>
                    <h2>Searching Result</h2>
                </div>
                <Product />
            </Fragment>
        );
    }
}
 
export default SearchListing;