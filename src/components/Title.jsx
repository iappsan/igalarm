import React from 'react'

export default function Title(props) {
    return (
        <>
            <br/>
            <h1>{props.title}</h1>
            <hr />
            <p className=" span">
                {props.desc}
            </p>
            <br />
            <br />
        </>
    )
}
