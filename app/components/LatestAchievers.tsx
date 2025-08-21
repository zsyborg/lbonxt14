import React, { useEffect } from 'react';
import Image from 'next/image';
import {motion, Transition} from 'motion/react';
import ImageSlider from "react-image-gallery";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const images = [
  {
    original: "https://lifeisspeed.in/content/images/thumbs/0001310.jpeg",
  },
  {
    original: "https://lifeisspeed.in/content/images/thumbs/0001312.jpeg",
  },
  {
    original: "https://lifeisspeed.in/content/images/thumbs/0001309.jpeg",
  },
  {
    original: "https://lifeisspeed.in/content/images/thumbs/0001311.jpeg",
  },
  {
    original: "https://lifeisspeed.in/content/images/thumbs/0001203.png",
  },
  {
    original: "https://lifeisspeed.in/content/images/thumbs/0001202.png",
  },
  {
    original: "https://lifeisspeed.in/content/images/thumbs/0001204.png",
  },
];

function LatestAchievers() {



  return (
    <>
        <div className='container'>
        <Slide slidesToScroll={1} slidesToShow={3}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
        </div>
    </>
  );
}

export default LatestAchievers;