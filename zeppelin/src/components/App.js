import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import ProjectList from './ProjectList';
import ProjectView from '../views/ProjectView';

export default class App extends Component {
    render() {
        return (
            <Provider {...this.props}>
                <Router>
                    <div>
                        <Route exact path='/' component={ProjectList} />
                        <Route path='/projects/:projectId' component={ProjectView} />
                    </div>
                </Router>
            </Provider>
        );
    }
}
