import React, { Component } from 'react'
import './index.css'
import ios from '../../images/ios.png'
import mac from '../../images/mac.png'
import android from '../../images/android.png'
import msos from '../../images/msos.png'
import msphn from '../../images/msphn.png'
import web from '../../images/web.png'

export class index extends Component {
    state = {
        os: [
            {
                id: "1",
                img: ios,
                osname: "Ios"
            },
            {
                id: "2",
                img: mac,
                osname: "Mac"
            },
            {
                id: "3",
                img: android,
                osname: "Android"
            },
            {
                id: "4",
                img: msos,
                osname: "Windows"
            },
            {
                id: "5",
                img: msphn,
                osname: "Windows Phone"
            },
            {
                id: "6",
                img: web,
                osname: "Web"
            },
        ],
        questions: [
            {
                id: "1",
                title: "abcd",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti voluptatibus beatae dolorem, explicabo debitis dolores pariatur ex obcaecati eius."
            },
            {
                id: "2",
                title: "abcd",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti voluptatibus beatae dolorem, explicabo debitis dolores pariatur ex obcaecati eius."
            },
            {
                id: "3",
                title: "abcd",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti voluptatibus beatae dolorem, explicabo debitis dolores pariatur ex obcaecati eius."
            },
            {
                id: "4",
                title: "abcd",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti voluptatibus beatae dolorem, explicabo debitis dolores pariatur ex obcaecati eius."
            },
            {
                id: "5",
                title: "abcd",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti voluptatibus beatae dolorem, explicabo debitis dolores pariatur ex obcaecati eius."
            },
            {
                id: "6",
                title: "abcd",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti voluptatibus beatae dolorem, explicabo debitis dolores pariatur ex obcaecati eius."
            },
            {
                id: "7",
                title: "abcd",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti voluptatibus beatae dolorem, explicabo debitis dolores pariatur ex obcaecati eius."
            },
            {
                id: "8",
                title: "abcd",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti voluptatibus beatae dolorem, explicabo debitis dolores pariatur ex obcaecati eius."
            },
            {
                id: "9",
                title: "abcd",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti voluptatibus beatae dolorem, explicabo debitis dolores pariatur ex obcaecati eius."
            },
            {
                id: "10",
                title: "abcd",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti voluptatibus beatae dolorem, explicabo debitis dolores pariatur ex obcaecati eius."
            },
            {
                id: "11",
                title: "abcd",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti voluptatibus beatae dolorem, explicabo debitis dolores pariatur ex obcaecati eius."
            },
            {
                id: "12",
                title: "abcd",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti voluptatibus beatae dolorem, explicabo debitis dolores pariatur ex obcaecati eius."
            },
            {
                id: "13",
                title: "abcd",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti voluptatibus beatae dolorem, explicabo debitis dolores pariatur ex obcaecati eius."
            },
        ],
    }


    allQuestions = () => {
        return (
            <>
                {
                    this.state.questions.map((question, index) => {
                        return (
                            <div>
                                <h4 className=""><i className="text-success fas fa-arrow-right"></i> {question.title}</h4>
                                <p className="ml-5"><i class="text-info fas fa-chevron-circle-right"></i> {question.desc}</p>
                                <hr/>
                            </div>
                        )
                    })
                }

            </>
        )
    }



    render() {
        return (
            <>
                <div className="container" style={{color:"rgba(0,0,0,.54)"}}>
                    <div className="row myDiv">
                        <div className="bg"></div>
                        <div className="text-white col d-flex flex-column justify-content-center align-items-center" style={{ height: "370px" }}>
                            <h1>Our Support Center</h1>
                            <p>Get the most out of software. Contact us if you don't find what you're looking for</p>

                            <button className="btn btn-success"><i className="fa fa-paper-plane"></i> Help desk</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between my-5 ml-3">
                        <h3>Frequently Asked Questions</h3>
                        <select name="lang">
                            <option value="english">English</option>
                        </select>
                    </div>
                    <div className="d-flex flex-wrap mb-5 ml-3">
                        {
                            this.state.os.map((item, index) => {
                                return (
                                    <div key={index} className="d-flex flex-column align-items-center mx-1" style={{ cursor: "pointer" }}>
                                        <img src={item.img} alt={item.img} width="170px" height="115px" />
                                        <span className="px-2 mt-2" style={{ border: "1px solid green", borderRadius: "20px" }}>{item.osname}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="ml-3"> 
                        <div>
                            <h3 className="mb-5">FAQ</h3>
                            {
                                this.allQuestions()
                            }


                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default index
