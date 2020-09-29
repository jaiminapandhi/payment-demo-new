import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound';
import Index from './Components/index';
import CheckoutForm from './Components/CheckoutForm';
import ShowUserData from './Components/ShowUserData';





const AppRouter=()=>{

    return(
        <Router >
            <div className="AppRouter">
               
                <Switch>
                    <Route path="/" component={Index} exact/>
                    <Route path="/addCardDeatail" component={CheckoutForm} exact/>
                    <Route path="/showCardDetail" component={ShowUserData} exact/>
                   
                    <Route component={NotFound}/>
                </Switch>
                


            </div>
        </Router>

    )


}

export default AppRouter;