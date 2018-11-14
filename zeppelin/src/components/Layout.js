import React from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';
import Menu from './Menu';
// import withLoadingInfo from "./LoadingInfo";

// import { isAppLoading } from "../selectors";

const Layout = props => {
    return (
        <div>
            <Menu />
            <Container>
                <Segment basic vertical>
                    <Grid divided stackable reversed={'mobile'}>
                        <Grid.Column width={12}>{props.content}</Grid.Column>
                        <Grid.Column width={4}>{props.sidebar}</Grid.Column>
                    </Grid>
                </Segment>
            </Container>
        </div>
    );
};

// const mapStateToProps = (state, ownProps) => ({
//     isAppLoading: isAppLoading(state)
// });
//
// const loadingMessage = "Za chwilę zostanie wyświetlony projekt";
// export default connect(mapStateToProps)(
//     withLoadingInfo({
//         message: loadingMessage,
//         selector: props => props.isAppLoading
//     })(Home)
// );

export default Layout;
