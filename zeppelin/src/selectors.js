import {createSelector} from 'reselect';

import {uniqBy} from 'lodash';

export const getProject = (state, props) => state.projects.data[props.id - 1] || {};

export const getProjectPoints = (state, props) => {
    const project = getProject(state, props);
    const {comments = []} = project;
    const points = comments.map(({x, y}) => ({x, y}));
    return uniqBy(points, ({x, y}) => `${x}-${y}`);
};

export const getSelectedPoint = state => state.selectedPoints;

export const getFilteredComments = createSelector(
    getProject, getSelectedPoint,

    (project, point) => {
        const {comments = []} = project;
        if (!point) return comments;

        return comments.filter(({x, y}) => `${x}-${y}` === `${point.x}-${point.y}`);
    }
);