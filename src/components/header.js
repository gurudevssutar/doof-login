import React from 'react'
import PropTypes from 'prop-types'



const header = (props) => {
    return (
        <header >
            <h1 style={{color:'#F7D832'}}>DOOF</h1>
            <h2>{props.title}</h2>
        </header>
    )
}

Headers.PropTypes={
    title:PropTypes.string,
}

export default header
