import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';

import SelectedTags from '../components/SelectedTags';
import SearchTags from '../components/SearchTags';

const SidebarTags = props => (
    <Fragment>
        <Header as='h3'> Szukane tagi: </Header>
        <SearchTags />
        <SelectedTags />
    </Fragment>
);

export default SidebarTags;
