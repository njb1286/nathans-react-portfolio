import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavivationComponent extends Component {
    constructor () {
        super ();
    }

        render () {
            return (
                <div className="nav-wrapper">
                    <div className="left-side">
                        <div className="nav-link-wrapper">
                            <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                        </div>
                        
                        <div className="nav-link-wrapper">
                            <NavLink exact to="/about-me" activeClassName="nav-link-active">About me</NavLink>
                        </div>

                        <div className="nav-link-wrapper">
                            <NavLink exact to="/contact" activeClassName="nav-link-active">Contact</NavLink>
                        </div>

                        <div className="nav-link-wrapper">
                            <NavLink exact to="/blog" activeClassName="nav-link-active">Blog</NavLink>
                        </div>
                    </div>

                    <div className="right-side">
                        GRATHAN FLENNION
                    </div>
                </div>
            )
        }
    }