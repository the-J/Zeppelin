import React from 'react';

import Layout from '../components/Layout';

import ImageComments from '../components/ImageComments';
import SidebarComments from '../components/SidebarComments';

const ProjectView = ({match}) => (
    <Layout
        sidebar={<SidebarComments id={match.params.projectId} />}
        content={<ImageComments id={match.params.projectId} points={match.params.comments} />}
    />
);

export default ProjectView;