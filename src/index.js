import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
import Index from "views/Index.js";
import Contact from "views/contact";
import Rooms from "views/rooms";
import Reservation from "views/reservation";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/index" render={(props) => <Index {...props} />}/>
            <Route path="/contact" render={(props) => <Contact {...props} />}/>
            <Route path="/rooms" render={(props) => <Rooms {...props} />}/>
            <Route path="/reservation" render={(props) => <Reservation {...props} />}/>
            <Redirect to="/index"/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
