import React, { Component } from 'react'
import Layout from '../../components/Layout/index'
import OwlCarousel from './../../components/OwlCarousel';

export class index extends Component {
    render() {
        
        return (
            <Layout>
                <OwlCarousel/>
                <OwlCarousel/>
                <OwlCarousel/>
                <OwlCarousel/>
                <OwlCarousel/>
                <OwlCarousel/>
                <OwlCarousel/>
                <OwlCarousel/>
                <OwlCarousel/>
            </Layout>
        )
    }
}

export default index
