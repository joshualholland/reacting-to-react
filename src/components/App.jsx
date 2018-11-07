import React, { Component } from 'react';

// const App = (props) => {
//     let element = <h1>{props.name}</h1>
//     return element;
// };

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: 'Josh',
            placeholder: 'input field',
            loaded: false
        }
    }

    handleTextChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    hasLoaded(e) {
        this.setState({
            loaded: true
        })
    }

    render() {
        return (
            <>
                <h1>{this.props.name} {this.state.text}</h1>
                <input placeholder={this.state.placeholder} onChange={(e) => this.handleTextChange(e)} />
                <button onClick={(e) => this.hasLoaded(e)} >Click</button>
            </>
        )
    }
};

export default App