import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Content = props => {
    return (
        <Menu size="large" stackable>
            <Container>
                <Menu.Item header>WarsawJS Worksohop #21</Menu.Item>
                <Menu.Item as={Link} to={'/'} name="features">
                    Lista projektów
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default Content;
