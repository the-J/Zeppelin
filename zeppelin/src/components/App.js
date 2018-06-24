import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Provider {...this.props}>
                <Router>
                    <div>
                        asdasdsa
                    </div>
                </Router>
            </Provider>
        );
    }
}
