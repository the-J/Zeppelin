import React from 'react';
import { Item, Segment } from 'semantic-ui-react';
import ProjectItem from './ProjectItem';

const SelectProject = ( { id } ) => (
    <Segment basuc vertical>
        <Item.Group>
            <ProjectItem selected id={id} />
        </Item.Group>
    </Segment>
);

export default SelectProject
