import React, { Component } from "react";
import { connect } from 'react-redux';

class Add extends Component {
    submitHandler = () => {
        console.log('test');
    }
    render() {
        return (
            <input type="text" onSubmit={this.submitHandler} />
        );
    }
}

export default Add;
