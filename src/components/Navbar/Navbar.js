import React from 'react';
import './style.css';
import SearchBar from '../SearchBar';
import Home from '../Home';
//import App from '';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Detail from '../Detail';


function Navbar() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">PokeAPI</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/detail">Detail</Link>
                        </li>

                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/search">
                    <SearchBar />
                </Route>
                <Route path="/detail">
                    <Detail/>
                </Route>
            </Switch>
        </Router>

    );
}

export default Navbar;