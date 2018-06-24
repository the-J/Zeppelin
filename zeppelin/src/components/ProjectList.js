import React from 'react';
import {connect} from 'react-redux';
import {Card, Header, Segment, Button} from 'semantic-ui-react';

import ProjectItem from './ProjectItem';

const ProjectList = ({projects, isLoading}) => (
    <div>
        <Segment clearing vertical basic>
            <Header floated="left" as="h1">
                Dostępne projekty aplikacji:
            </Header>
        </Segment>
        <Card.Group itemsPerRow={3}>
            {projects.map(project => <ProjectItem project={project}/>)}
        </Card.Group>
    </div>
);

ProjectList.defaultProps = {
    projects: []
};

const mapStateToProps = (state, ownProps) => ({
    projects: state.projects.data,
    isLoading: state.isLoading
});

export default connect(mapStateToProps)(ProjectList);
