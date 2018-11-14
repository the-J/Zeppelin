import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Header, Segment } from 'semantic-ui-react';

import { getFilteredProjects, isProjectsLoading } from '../selectors';

import ProjectItem from './ProjectItem';
import Counter from './Counter';

const ProjectList = ( { projects } ) => (
    <Counter>
        {( counter, plus, minus ) => (
            <Fragment>
                <Segment clearing vertical basic>
                    <Button.Group basic floated="right">
                        <Button onClick={minus} icon="minus" />
                        <Button>limit: {counter}</Button>
                        <Button onClick={plus} icon="plus" />
                    </Button.Group>

                    <Header floated="left" as="h1">
                        Dostępne projekty aplikacji:
                    </Header>
                </Segment>

                <Card.Group itemsPerRow={3}>
                    {
                        projects
                            .slice(0, counter)
                            .map(item => <ProjectItem key={item.id} project={item} id={item.id} />)
                    }
                </Card.Group>
            </Fragment>
        )}
    </Counter>
);

ProjectList.defaultProps = {
    projects: []
};

const mapStateToProps = ( state, ownProps ) => ({
    projects: getFilteredProjects(state),
    isLoading: isProjectsLoading(state)
});

export default connect(mapStateToProps)(ProjectList);
