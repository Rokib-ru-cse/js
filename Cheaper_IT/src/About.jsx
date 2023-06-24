import React from 'react';
import Common from './Common'
import pic from './images/aboutpage.png';
function About() {
  return (
    <>
      <Common 
        name='Welcome to About page'
        visit='/contact'
        imgsrc={pic}
        btn_name='Contact Now'
      />
    </>
  );
}

export default About;
