import React from 'react';
import Common from './Common'
import pic from './images/homepage.png';
function Home() {
  return (
    <>
      <Common 
        name='Grow Your Business With'
        visit='/service'
        imgsrc={pic}
        btn_name='Get Started'
      />
    </>
  );
}

export default Home;
