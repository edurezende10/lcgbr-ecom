import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import ProductPage from '../Pages/Product/index'
import Home from './../Pages/Home/index';

import ResumeCart from './../Pages/ResumeCart/index';
import CheckoutSuccess from './../Pages/CheckoutSuccess';
import CheckoutIndex from './../Pages/CheckoutIndex/index';
import CheckoutPayment from './../Pages/CheckoutPayment/index';

const MainRoutes = () => {
    return (
        <Router>
            <Switch >
                <Route exact path="/product/:id" component={ProductPage}/>
                <Route exact path="/cart" component={ResumeCart}/>
                <Route exact path="/checkout/index/" component={CheckoutIndex}/>
                <Route exact path="/checkout/payment" component={CheckoutPayment}/>
                <Route exact path="/checkout/finish/success" component={CheckoutSuccess}/>
                <Route exact path="/" component={Home}/>
            </Switch >
        </Router>
    )
}

export default MainRoutes
