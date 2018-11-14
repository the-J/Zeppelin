import React, { Fragment } from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Menu from './Menu';

import withLoadingInfo from "./LoadingInfo";
import { isAppLoading } from "../selectors";

const Home = props => {
    return (
        <Fragment>
            <Menu />

            <Container>
                <Segment basic vertical>
                    <Grid divided stackable reversed={'mobile'}>
                        <Grid.Column width={12}>{props.content}</Grid.Column>
                        <Grid.Column width={4}>{props.sidebar}</Grid.Column>
                    </Grid>
                </Segment>
            </Container>
        </Fragment>
    );
};

const mapStateToProps = (state, ownProps) => ({
    isAppLoading: isAppLoading(state)
});

const loadingMessage = "Za chwilę zostanie wyświetlony projekt";

export default connect(mapStateToProps)(
    withLoadingInfo({
        message: loadingMessage,
        selector: props => props.isAppLoading
    })(Home)
);

