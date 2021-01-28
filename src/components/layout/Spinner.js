import React, { Fragment } from 'react'
import spinner from './spinner.gif'

export const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="Loading..." style={spinnerStyle}/>
        </Fragment>
    )
}

const spinnerStyle = {
    width: '200px',
    margin: 'auto',
    display: 'block'
}

export default Spinner