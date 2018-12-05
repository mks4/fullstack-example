import React from 'react'
import ReactDOM from 'react-dom'

export class App extends React.Component 
{
    constructor()
    {
        super()
    }

    render()
    {
        return (
            <div className="mainContents" style={style}></div>
        )
    }
}

const style = {
    "width": "912px",
    "min-height" : "100%",
    "margin" : "0 auto",
    "background-color": "#804040"
}