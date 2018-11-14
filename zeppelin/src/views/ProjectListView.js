import React from 'react';

import Layout from '../components/Layout';
import SidebarTags from '../components/SidebarTags';
import ProjectList from '../components/ProjectList';

const ProjectListView = ( { match } ) => (
    <Layout
        sidebar={<SidebarTags id={match.params.projectId} />}
        content={<ProjectList id={match.params.projectId} />}
    />
);

export default ProjectListView;
