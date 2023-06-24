import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function index() {
    const options = {
        items: 1,
        nav: true,
        navText:["<div className='nav-btn prev-slide'></div>","<div className='nav-btn next-slide'></div>"],
        rewind: true,
        autoplay: true,
        slideBy: 1,
        dots: true,
        dotsEach: true,
        dotData: true,
        margin:10,
        loop:true
      };

    return (
        <OwlCarousel className='owl-theme' options={options}>
            <div className='item'>
                <h4>1</h4>
            </div>
            <div className='item'>
                <h4>2</h4>
            </div>
            <div className='item'>
                <h4>3</h4>
            </div>
            <div className='item'>
                <h4>4</h4>
            </div>
            <div className='item'>
                <h4>5</h4>
            </div>
            <div className='item'>
                <h4>6</h4>
            </div>
            <div className='item'>
                <h4>7</h4>
            </div>
            <div className='item'>
                <h4>8</h4>
            </div>
            <div className='item'>
                <h4>9</h4>
            </div>
            <div className='item'>
                <h4>10</h4>
            </div>
            <div className='item'>
                <h4>11</h4>
            </div>
            <div className='item'>
                <h4>12</h4>
            </div>
        </OwlCarousel>
    )
}
