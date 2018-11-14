import { createSelector } from 'reselect';
import { flatten, flow, intersection, sortBy, uniq, uniqBy } from 'lodash';

export const getShops = state => state.shops;
export const getSelectedtags = state => state.selectedtags;
export const getSelectedPoint = state => state.selectedPoint;
export const getProjectsOrder = state => state.projects.order;
export const getProjectsEntities = state => state.projects.entities;
export const getSimilars = state => state.similars;
export const isAppLoading = state => state.isAppLoading;
export const isProjectsLoading = state =>
    isAppLoading(state) || state.projects.loading;
export const getProject = ( state, props ) =>
    state.projects.data[ props.id - 1 ] || {};


// export const getFiltredComments = (state, props) => {
//   const point = state.selectedPoint;
//   console.warn({ point });
//   const project = state.projects.entities[parseInt(props.id, 10)] || {};
//   const { comments = [] } = project;
//   if (!point) return comments;
//   const filterdComments = comments.filter(
//     ({ x, y }) => `${x}-${y}` === `${point.x}-${point.y}`
//   );
//   return filterdComments;
// };

export const getFilteredComments = createSelector(
    getProject, getSelectedPoint,

    ( project, point ) => {
        const { comments = [] } = project;

        if (!point) return comments;

        return comments.filter(( { x, y } ) => `${x}-${y}` === `${point.x}-${point.y}`);
    }
);
export const getProjectPoints = createSelector(getProject, project => {
    const { comments = [] } = project;
    const points = comments.map(( { x, y } ) => ({ x, y }));
    return uniqBy(points, ( { x, y } ) => `${x}-${y}`);
});

export const getProjects = createSelector(
    getProjectsOrder,
    getProjectsEntities,
    ( order, entities ) => order.map(id => entities[ id ])
);

export const getMatchtags = createSelector(
    getSelectedtags,
    getProjects,
    ( tags, projects ) => {
        return projects.reduce(( acc, project ) => {
            return {
                ...acc,
                [ project.id ]: intersection(project.tags, tags).length
            };
        }, {});
    }
);

export const getFilteredProjects = createSelector(
    getSelectedtags,
    getProjects,
    getMatchtags,
    ( tags, projects, match ) => {
        if (tags.length === 0) return projects;

        return projects
            .filter(project => match[ project.id ] > 0)
            .sort(( a, b ) => match[ a.id ] < match[ b.id ]);
    }
);

export const getAllTags = createSelector(
    getProjects,
    flow([ data => data.map(item => item.tags), flatten, uniq, sortBy ])
);


export const getNotSelectedtags = createSelector(
    getSelectedtags,
    getAllTags,
    ( selectedtags, alltags ) =>
        alltags.filter(item => !selectedtags.includes(item))
);
