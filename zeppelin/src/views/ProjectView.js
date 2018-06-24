import React from 'react';

import Layout from '../components/Layout';

import ImageComments from '../components/ImageComments';
import SidebarComments from '../components/SidebarComments';
import ProjectSimilars from '../components/ProjectSimilars';

const ProjectView = ({match}) => (
    <Layout
        sidebar={<SidebarComments id={match.params.projectId} />}
        content={
            <div>
                <ImageComments id={match.params.projectId} points={match.params.comments} />
                <ProjectSimilars id={match.params.projectId} />
            </div>
        }
    />
);

export default ProjectView;