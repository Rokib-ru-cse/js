import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/Header/index'
import Sidebar from './components/Sidebar/index'
import Transaction from './containers/Transaction/index'
import Report from './containers/Report/index'
import Budget from './containers/Budget/index'
import Help from './components/Help/index'
import Mywallet from './components/Mywallet/index'
import Category from './components/Category/index'
import Linkwallet from './components/Linkwallet/index'
import Search from './components/Search/index'
import Store from './components/Store/index'
import './App.css'

export class App extends Component {

    state = {
        active: true,
    }
    toggleSideBarClass = () => {
        this.setState({ active: !this.state.active });
    };


    render() {
        return (
            <>
                <Header sidebar={this.toggleSideBarClass} />
                <div className={this.state.active ? 'sidebar' : null} >
                    <Sidebar toggleClass={this.toggleSideBarClass} />
                </div>
                <Switch >
                    <Route exact path="/report"
                        component={Report}
                    />
                    <Route exact path="/help-desk"
                        component={Help}
                    />
                    
                    <Route exact path="/budget"
                        component={Budget}
                    />
                    <Route exact path="/search"
                        component={Search}
                    />
                    <Route exact path="/store"
                        component={Store}
                    />
                    <Route exact path="/help"
                        component={Help}
                    />
                    <Route exact path="/mywallet"
                        component={Mywallet}
                    />
                    <Route exact path="/categories"
                        component={Category}
                    />
                    <Route exact path="/"
                        component={Transaction}
                    />
                    <Route exact path="/linked-wallet"
                        component={Linkwallet}
                    />
                    <Redirect from="/wallet" to="/"  />

                </Switch>
            </>
        )
    }
}

export default App