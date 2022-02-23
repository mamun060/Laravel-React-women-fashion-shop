import React, { Component, Fragment } from 'react'
import Product from '../product/Product';
import styles from '../../Assets/css/Category.module.css';
import {Form} from 'react-bootstrap';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
              <div className={styles.CategoriesHeading}>
                  <h2>Women's fashion</h2>
              </div>

              <div className={styles.ProductFilter}>
                  <div className={styles.FilterByPrice}>
                    <Form.Select aria-label="Default select example">
                        <option>Price Filter</option>
                        <option value="1">100-1000</option>
                        <option value="2">1000-1500</option>
                        <option value="3">2000-5000</option>
                        <option value="3">5000-10000</option>
                    </Form.Select>
                  </div>
                  <div className={styles.FilterBySize}>
                    <Form.Select aria-label="Default select example">
                        <option>Select Size</option>
                        <option value="1">XXL</option>
                        <option value="2">XL</option>
                        <option value="3">L</option>
                        <option value="4">M</option>
                    </Form.Select>
                  </div>
              </div>

              <Product />
              <Product />
            </Fragment>
        );
    }
}
 
export default Category;