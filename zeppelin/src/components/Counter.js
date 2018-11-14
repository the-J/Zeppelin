import React, { Component, Fragment } from 'react';

class Counter extends Component {
    constructor( props ) {
        super(props);

        this.state = { counter: 5 };
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    }

    plus() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    }

    minus() {
        this.setState(prevState => ({
            counter:
                prevState.counter === 1 ? prevState.counter : prevState.counter - 1
        }));
    }

    render() {
        return (
            <Fragment>
                {this.props.children(this.state.counter, this.plus, this.minus)}
            </Fragment>
        );
    }
}

export default Counter;
