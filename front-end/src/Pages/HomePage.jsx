import React, { Component, Fragment } from 'react';
import TopNavbar from '../Components/common/TopNavbar';
import NavHeader from '../Components/common/NavHeader';
import TopSlider from '../Components/home/TopSlider';
import SectionOne from '../Components/home/SectionOne';
import SectionTwo from '../Components/home/SectionTwo';
import TopFooter from '../Components/common/TopFooter';
import Two from '../Assets/images/02.jpg';
import One from '../Assets/images/01.jpg';
import SecondOne from '../Assets/images/07.jpg';
import SecondTwo from '../Assets/images/08.jpg';
import ThirdOne from '../Assets/images/bottomBanner/b01.jpg';
import ThirdTwo from '../Assets/images/bottomBanner/b02.jpg';
import BottomBanner from '../Components/home/BottomBanner';
import BigBannerBottom from '../Components/home/BigBannerBottom';
import BigBanner from '../../src/Assets/images/bottomBanner/Untitled-16_1200x.jpg';
import CopyRight from '../Components/common/CopyRight';


class HomePage extends Component {
    render() { 
        return (
            <Fragment>
                <TopNavbar />
                <NavHeader />
                <TopSlider />
                <SectionOne 
                imgOne={Two}
                imgTwo={One}
                />
                <SectionTwo />
                <SectionOne 
                imgOne={SecondOne}
                imgTwo={SecondTwo}
                />
                <SectionOne 
                imgOne={ThirdOne}
                imgTwo={ThirdTwo}
                />
                
                <BigBannerBottom 
                BannerImg={BigBanner}
                />

                <BottomBanner />

                <TopFooter />
                <CopyRight />
            </Fragment>
        );
    }
}
 
export default HomePage;
