import React from 'react'
import {Link} from 'react-router-dom'

export default function () {
    return (
        <div>
            <h1>Sorry! We couldn't find that page! Try another URL</h1>
            <Link to="/">Return</Link>
        </div>
    )
}