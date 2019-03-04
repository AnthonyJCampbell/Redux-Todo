import React, { Component } from "react";
import { connect } from 'react-redux';

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue : '',
        }
    }
    changeHandler = (event) => {
        this.setState({inputValue: event.target.value})
    }
    clickHandler = (event) => {
        event.preventDefault();
        this.props.addToDoFunction(this.state.inputValue);
        this.setState({ currentInputValue: "" });
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.changeHandler} />
                <button onClick={this.clickHandler}>Click Me!</button>
            </div>
        );
    }
}

export default Add;
