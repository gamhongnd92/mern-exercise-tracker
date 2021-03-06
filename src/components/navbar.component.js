import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create">Create Exercise Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}