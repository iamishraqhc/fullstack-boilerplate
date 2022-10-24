// import necessary dependencies here
import React from 'react'
import { FetchData } from '..'

// rename Component2 to match your need
// add necessary props like prop1, prop2 below
const Component2 = ({ prop1, prop2 }) => {
    return (
        // usage of fragments
        <>
            <FetchData query="friends" />
            <h2>{prop1} {prop2}</h2>
        </>
    )
}

export default Component2
