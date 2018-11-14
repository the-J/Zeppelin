import React from 'react';
import { connect } from 'react-redux';
import { Button, Header, Icon, Image, Segment } from 'semantic-ui-react';
import { getProject, getProjectPoints, getSelectedPoint } from '../selectors';

const ImageComments = ( { points, selectPoint, point, title } ) => {
    return (
        <Segment basic vertical>
            <Header as="h1">{title}</Header>
            <div
                style={{
                    marginLeft: '50%',
                    marginTop: 32,
                    position: 'relative',
                    display: 'inline-block',
                    transform: 'translateX(-50%)'
                }}
            >
                <Image src="http://via.placeholder.com/175x250" size="big" />
                {
                    points.map(( { x, y } ) => (
                        <Button
                            key={`${x}-${y}`}
                            icon
                            circular
                            onClick={() => selectPoint({ x, y })}
                            color={
                                point && `${x}-${y}` === `${point.x}-${point.y}` ? 'green' : 'red'
                            }
                            style={{
                                position: 'absolute',
                                transform: 'translate(-20px, -20px)',
                                top: y,
                                left: x
                            }}
                        >
                            <Icon name="comment" />
                        </Button>
                    ))
                }
            </div>
        </Segment>
    );
};

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    selectPoint: point => dispatch({ type: 'SELECT_POINT', payload: point })
});

const mapStateToProps = ( state, ownProps ) => ({
    points: getProjectPoints(state, ownProps),
    point: getSelectedPoint(state, ownProps),
    title: getProject(state, ownProps).title
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageComments);
