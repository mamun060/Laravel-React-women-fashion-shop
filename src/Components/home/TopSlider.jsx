/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component, Fragment } from 'react';
import {Row} from 'react-bootstrap';
import sliderTwo from '../../Assets/images/slider/slider-02.jpg';
import sliderThree from '../../Assets/images/slider/slider-03.jpg';
import sliderFour from '../../Assets/images/slider/slider-04.jpg';
import Slider from "react-slick";
import styles from '../../Assets/css/TopSlider.module.css';

class TopSlider extends Component {
    render() { 
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <Fragment>
                <div className={styles.banner}>
                <Row fluid={true}>
                    <Slider {...settings}>
                        <div className={styles.SliderDiv}>
                        <img className={styles.SliderImages} src={sliderTwo} alt="" />
                        </div>
                        <div className={styles.SliderDiv}>
                        <img className={styles.SliderImages} src={sliderThree} alt="" />
                        </div>
                        <div className={styles.SliderDiv}>
                        <img className={styles.SliderImages} src={sliderFour} alt="" />
                        </div>
                    </Slider>
             </Row>
                </div>
            </Fragment>
          );
    }
}
 
export default TopSlider;