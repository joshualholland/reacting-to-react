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
            value: e.target.value,
            text: e.target.value
        })
    }

    hasLoaded(e) {
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
                    <button onClick={(e) => this.componentDidMount(e)} >Click</button>
                </>
            )
        } else
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