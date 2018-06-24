import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import ProjectList from './ProjectList';

export default class App extends Component {
    render() {
        console.log('app', this.props);

        return (
            <Provider {...this.props}>
                <Router>
                    <div>
                        <Route exact path='/' component={ProjectList} />
                    </div>
                </Router>
            </Provider>
        );
    }
}
