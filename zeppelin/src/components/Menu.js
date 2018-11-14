import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Content = () => {
    return (
        <Menu size="large" stackable>
            <Container>
                <Menu.Item header>WarsawJS Workshop</Menu.Item>
                <Menu.Item as={Link} to={'/'} name="features">
                    Lista projektów
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default Content;
