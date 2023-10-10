import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './certyficats.css';

// Zaimportuj obrazy certyfikatów
import jsCert from './certyficatsImg/(ENG)UC-c6e83869-0ddc-48fc-b6ae-81d79a674bbf.jpg';
import wwwHTMLCSSRWDCert from './certyficatsImg/(ENG)UC-5742fd04-5365-42b4-bbf0-166bb4b4cfe2.jpg';
import css2Cert from './certyficatsImg/(ENG)_UC-4cfc31cf-27f3-432d-8979-6b7d3d7b1e27.jpg';
import css3Cert from './certyficatsImg/(ENG)UC-24f75423-219e-4a71-8ab0-7bdbccb74ede (1).jpg';
import cmsCert from './certyficatsImg/cms.jpg';
import bashCert from './certyficatsImg/(ENG)_UC-41958d0b-9417-417a-a5be-b5eccd7bfa56.jpg';
import javaCert from './certyficatsImg/(ENG)UC-dfbd8276-e02c-4c56-9b64-7cb0c4a672ef.jpg';
import sqlCert from './certyficatsImg/UC-a316ca59-a179-44df-92ba-e7c6a29dbf96(ENG).jpg';
import pomeranianVol1Cert from './certyficatsImg/Dominik Reszczyński_certyfikat_EN_page-0001.jpg';
import pomeranianVol2Cert from './certyficatsImg/Dominik Reszczyński_certyfikat_EN_page-0002.jpg';
import wordPressCert from './certyficatsImg/mpdf_page-0001.jpg';
import phpCert from './certyficatsImg/(ENG)UC-78379797-7844-4cd8-899d-1e13e8129b5d (1).jpg' 

export const Certficats = () => {
    const settings = {
        pauseOnhover: true,
        focusOnSelect: true,
        arrows: true,
        infinite: true,
        dots: true,
        slidesToShow: 1, // Wyświetl 3 slajdy na raz
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    const certyficats = [
        {
            name: 'JavaScript - The Only Course You Need!',
            image: jsCert
        },
        {
            name: 'CSS3 Course Level II: essential properties and techniques',
            image: css2Cert
        },
        {
            name: 'CSS3 level III - effects, transformations, transitions',
            image: css3Cert
        },
        {
            name: 'Web Design Course Part I - HTML, CSS, RWD',
            image: wwwHTMLCSSRWDCert
        },
        {
            name: 'How to create a CMS in JavaScript',
            image: cmsCert
        },
        {
            name: 'Bash & Linux: command line for beginners',
            image: bashCert
        },
        {
            name: 'Java from Basics to Expert - create your own applications',
            image: javaCert
        },
        {
            name: 'SQL course from scratch | MySQL',
            image: sqlCert
        },
        {
            name: 'Pomeranian Junior Front-end Developer side 1',
            image: pomeranianVol1Cert
        },
        {
            name: 'Pomeranian Junior Front-end Developer side 2',
            image: pomeranianVol2Cert
        },
        {
            name: 'PHP: Learn to program and build a ChatBot from scratch',
            image: phpCert
        },
        {
            name: 'WordPress course - creating a website from scratch',
            image: wordPressCert
        },
    ]
    return (
        <div className='main-ceryficat'>
            <h1 className='main-ceryficat__title'>Moje certyfikaty</h1>
            <div className='center-container'>
                <div className='slider'>
                    <Slider {...settings}>
                        {certyficats.map((item) => {
                            return (<div className='slide'>
                                <h2>{item.name}</h2>
                                <img src={item.image} alt={item.name} className='slide__certyficat' />
                            </div>)
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}