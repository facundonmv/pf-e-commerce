import "./App.css";
import {Route, Switch} from 'react-router-dom'
import React from "react";
import Home from './Components/Home';
import NavBar from './Components/NavBar'
import FormProduct from "./Components/FormProduct";


function App() {

    return (

        <div className="App">
            <NavBar/>
            <Switch>
                <Route path='/home'><Home/></Route>
                <Route path='/create' component={FormProduct}/>
                 {/*<Route exact="exact" path={"/"} render={() => <LandingPage/>}/>*/}
               {/* <Route exact="exact" path={"/details"} render={() => <Details/>}/>*/}
            </Switch>

        </div>

    );
}
export default App;