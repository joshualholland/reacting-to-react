import React, { Component } from 'react';

// const App = (props) => {
//     let element = <h1>{props.name}</h1>
//     return element;
// };

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            placeholder: 'input field',
        }
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    loadIt(e) {
        this.setState({
            loaded: true
        })
    }

    unloadIt(e) {
        this.setState({
            loaded: false
        })
    }

    componentDidMount(e) {
        this.setState({
            loaded: true
        })
    }

    render() {
        if (this.state.loaded === false) {
            return (
                <>
                    <h1>Loading...</h1>
                    <button onClick={(e) => this.loadIt(e)} >Click</button>
                </>
            )
        } else
            return (
                <>
                    <h1>{this.props.name} {this.state.text}</h1>
                    <input value={this.state.text} placeholder={this.state.placeholder} onChange={(e) => this.handleTextChange(e)} />
                    <button onClick={(e) => this.unloadIt(e)} >Click</button>
                </>
            )
    }
};

export default App