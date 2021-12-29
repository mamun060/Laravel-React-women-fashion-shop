import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../Assets/css/HomeSection.module.css';
import one from '../../Assets/images/bottomBanner/01.jpg';

class BottomBanner extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Fragment>
                <Container fluid={true}>
                <div className={styles.GridDesign}>
                    <div className={styles.BannerWrap}>
                        <img className={styles.BottomBannerImg} src={one} alt="" />
                    </div>
                    <div className={styles.BannerWrap}>
                        <img className={styles.BottomBannerImg} src={one} alt="" />
                    </div>
                    <div className={styles.BannerWrap}>
                        <img className={styles.BottomBannerImg} src={one} alt="" />
                    </div>
                    <div className={styles.BannerWrap}>
                        <img className={styles.BottomBannerImg} src={one} alt="" />
                    </div>
                    <div className={styles.BannerWrap}>
                        <img className={styles.BottomBannerImg} src={one} alt="" />
                    </div>
                </div>
                </Container>
            </Fragment>
         );
    }
}
 
export default BottomBanner;