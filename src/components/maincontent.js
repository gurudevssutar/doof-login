import React from 'react'
import Left from "./left"
import Right from './right'
import Footer from './footer'
const maincontent = () => {
    return (
        <div>
        <div className="row">
            <Left/>
            <Right/>
        </div>
        <Footer/>
        </div>
    )
}

export default maincontent
