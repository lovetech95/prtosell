import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slide.css';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
    'https://lh3.googleusercontent.com/Q6YJQgaOYDsyIunyKUeircXaJtjQoz60FwCEN1WPm1FQIPTJ2YZiKyojEY3_-4u4gc1pRYU6A0kAD36dPB39sDJMu63bFCgvj-2UrxUkwO0zslh6QXRUGhDLILoQVryCc4f-dUa4ug=w2400',
    'https://lh3.googleusercontent.com/uYUqY2Pq4l4bh7ox-xt-t_X1JWTko47VjZczNtEoMhGOxHIi6GJl1R0Vp_4K0_LqziVQ7kgLwLO2-uj7J5SWVCp9o-YpEszIpqF_dbRasu-EAlCHv_QKcxXNbAUzFP4jQJwNI9mWbQ=w2400',
    'https://lh3.googleusercontent.com/n2NW-hbYBEJueh34Sz5PoBMjGJTWWGhm4RnM5Ers3aZulrsZznKWx2cQq7RCGUMNmfmBVFJs8h2uh_BA6NO3OApDFXWTBV58fs7Wpm9pgI1SIK0nNCQO9pmXItomslmAUqL6nI_atw=w2400',
    'https://lh3.googleusercontent.com/aqX-YPD3aqrjHlwog02Bssw1qPg2xPT5JPju41_JsjIdeF3pYogW8oP6tKcaBM5ZboScPur8J3lL54_5cCtixwyxBwDpNqSznixTa4WceRcieCtcsS-BVnWk_G5u5gNJqEHjOU45gA=w2400',
    'https://lh3.googleusercontent.com/Jw5OwIGHJ22PfirsI9_JAu_gr0kKszGw3yonf1XMUmQf9uE0Iga3QFXaTP7sqAfmN-eWlo8mGEJDRulszoBU7fZ_EXpPSAAw_0L_wJcG1wH7uHJb_lh5kQoqzCp77PXYxzVFeXf5Rw=w2400'
  ];

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  }
  
  const Slideshow = () => {
      return (
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
            </div>
          </div>                    
        </Slide>
      )
  }
  
  export default Slideshow;