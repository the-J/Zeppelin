import React, { Fragment } from 'react';
import { Button, Comment, Form, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { getFilteredComments, getSelectedPoint } from '../selectors';

const SidebarComments = ( { comments, point, deselectPoint } ) => (
    <Fragment>
        <Header as='h3'>Komentarze: </Header>

        {point && (
            <Button
                basic
                labelPosition='right'
                color='green'
                icon
                size='mini'
                onClick={deselectPoint}
            >
                <Icon name='close' />
                Punkt: {`${point.x}x${point.y}`}
            </Button>
        )}

        <Comment.Group>
            {comments.length > 0 &&
            comments.map(( { author, content, id } = {} ) => (
                <Comment key={id}>
                    <Comment.Avatar
                        as='a'
                        src={`http://i.pravatar.cc/35?img=${id}`}
                    />
                    <Comment.Content>
                        <Comment.Author>{author}</Comment.Author>
                        <Comment.Text>
                            <p>{content}</p>
                        </Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>odpowiedz</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            ))}

            <Form reply>
                <Form.TextArea />
                <Button
                    content='Dodaj komentarz'
                    labelPosition='left'
                    icon='edit'
                    primary
                />
            </Form>
        </Comment.Group>
    </Fragment>
);


const mapDispatchToProps = ( dispatch, ownProps ) => ({
    deselectPoint: point => dispatch({ type: 'DESELECT_POINT' })
});

const mapStateToProps = ( state, ownProps ) => {
    getFilteredComments(state, ownProps);

    return {
        comments: getFilteredComments(state, ownProps),
        point: getSelectedPoint(state, ownProps)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SidebarComments);
