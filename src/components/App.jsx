import React from 'react'
import ReactDOM from 'react-dom'

export class App extends React.Component 
{
    constructor()
    {
        super()
        this.state = {date : new Date(), counting : true }

        this.clickHandler = this.clickHandler.bind(this)
    }

    startTimer() {
        this.setState({counting : true})
        this.timerID = setInterval(()=>this.tick(), 1000)
    }

    stopTimer() {
        this.setState({counting : false})
        clearInterval(this.timerID)
    }

    componentDidMount() {
        this.startTimer()
    }

    componentWillUnmount() {
        this.stopTimer()
    }

    tick() {
        // Changing the state automatically triggers render()
        this.setState({date: new Date()})
        // this.state.date = { date : new Date() } // wrong
        // setState({ something : this.props.val1 + this.state.val2}) // wrong
        // this.setState((state, props) => ({something: state.val1 + props.val2})) // ok
    }

    clickHandler(event) {
        this.state.counting ? this.stopTimer() : this.startTimer()
    }

    render()
    {
        return (
            <div style={{"margin" : -10, "padding" : 0}}>
                <div className="mainHeader" style={{"width" : "100%", "height" : "312px", "backgroundColor" : "#dddddd", "margin" : "0", "padding" : "0"}}></div>
                <div className="mainContents" style={style}>
                    <p>{this.state.date.toLocaleTimeString()}</p>
                    <button onClick={this.clickHandler}>Click here</button>
                </div>
            </div>
        )
    }
}

const style = {
    "width": "912px",
    "margin" : "0 auto"
}