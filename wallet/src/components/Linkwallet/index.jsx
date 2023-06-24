import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import bank from '../../images/bank.png'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './index.css'

export class index extends Component {

    state = {
        banks: [
            {
                id: "1",
                img: bank,
                bname: "ANZ",
                bcountry: "Australia"
            },
            {
                id: "2",
                img: bank,
                bname: "BCA",
                bcountry: "Indonesia"
            },
            {
                id: "3",
                img: bank,
                bname: "Bangkok Bank",
                bcountry: "Thailand"
            },
            {
                id: "4",
                img: bank,
                bname: "Bank Danamon",
                bcountry: "Indonesia"
            },
            {
                id: "5",
                img: bank,
                bname: "Bank Syariah Mandiri",
                bcountry: "Indonesia"
            },
            {
                id: "6",
                img: bank,
                bname: "Bank of China",
                bcountry: "Hong KOng "
            },
            {
                id: "7",
                img: bank,
                bname: "Bank of East Asia",
                bcountry: "Hong Kong"
            },
            {
                id: "8",
                img: bank,
                bname: "Bank of India",
                bcountry: "India"
            },
            {
                id: "9",
                img: bank,
                bname: "Bankwest",
                bcountry: "Australia"
            },
        ],
        options: {
            nav: true,
            navText: ["Prev", "Next"],
            slideBy: 6,
            dots: false,
            loop: true,
            margin:10,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 7
                }
            }
        }
    }

    owlCar = () => {
        return (
            <OwlCarousel className='owl-theme' {...this.state.options}>

                {
                    this.state.banks.map((bank, index) => {
                        return (
                            <div className='item text-center' key={index} style={{backgroundColor:"rgba(255,255,255,1)"}}>
                                <img src={bank.img} alt={bank.img} className="img-fluid rounded-circle"/>
                                <p className="text-dark" style={{marginTop:"20px"}}>{bank.bname}</p>
                                <small style={{color:"rgba(0,0,0,0.54)"}}>{bank.bcountry}</small>
                              </div>
                        )
                    })
                }
            </OwlCarousel>
        )
    }


    render() {
        return (
            <>
                <div className="w-50 mt-3 mx-auto d-flex align-items-center border px-4" style={{ borderRadius: "50px" }}>
                    <i className="fas fa-search"></i>
                    <input type="text" className="w-100 pl-3 py-2" style={{ border: "1px solid transparent" }} />
                </div>
                <div className="container mb-5">
                    <div className="row w-75 mx-auto">
                        <div className="col-sm-12 col-md-12">
                            <p style={{color:"rgba(0,0,0,0.54)"}}>Banks</p>
                        </div>
                        <div className="col-sm-12 col-md-12">
                            {this.owlCar()}
                        </div>
                    </div>
                    <div className="row w-75 mx-auto">
                        <div className="col-sm-12 col-md-12">
                            <p style={{color:"rgba(0,0,0,0.54)"}}>All Providers</p>
                        </div>
                        <div className="col-sm-12 col-md-12">
                            {this.owlCar()}
                        </div>
                    </div>
                </div>

            </>
        )
    }
}


export default index
