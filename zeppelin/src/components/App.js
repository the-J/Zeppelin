import React, {Component} from 'react';
import {Provider} from 'react-redux';

import ProjectList from './ProjectList';

export default class App extends Component {
    render() {
        console.log('app', this.props);

        return (
            <Provider {...this.props}>
                <div>
                    <ProjectList />
                </div>
            </Provider>
        );
    }
}
