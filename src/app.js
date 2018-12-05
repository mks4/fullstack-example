import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App.jsx'

document.getElementByName("html").style("height:100%")
ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)