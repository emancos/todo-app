import React from 'react'
import { Card, Row } from 'react-bootstrap'
import PageHeader from '../template/PageHeader'

const About = props => {

    return (
        <Card>
            <Card.Header>
                <PageHeader name='Sobre' small='Nós' />
            </Card.Header>
            <Card.Body>
                <Row>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Row>
            </Card.Body>
        </Card>
        
    )
}

export default About