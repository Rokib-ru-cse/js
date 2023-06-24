import React, { Component } from 'react'
import Header from '../Header/index'
import MenuHeader from '../MenuHeader/index'

export class index extends Component {
  
    render() {
        return (
            <>
                <Header />
                <MenuHeader />
                {this.props.children}
            </>
        )
    }
}

export default index
