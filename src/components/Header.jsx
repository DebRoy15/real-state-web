import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../sass/_main.sass"

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <h1>LOGO</h1>
                </div>

                <nav>
                    <Link> Create ads</Link>
                    <Link> About us</Link>
                    <Link> Log in</Link>
                    <Link className="register-btn"> Register</Link>
                </nav>
            </div>
        )
    }
}
