import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
  import ProductPage from '../Pages/Product/index'
import Home from './../Pages/Home/index';

const MainRoutes = () => {
    return (
        <Router>
            <Switch >
                <Route exact path="/product/:id" component={ProductPage}/>
                <Route  path="/" component={Home}/>
            </Switch >
        </Router>
    )
}

export default MainRoutes
