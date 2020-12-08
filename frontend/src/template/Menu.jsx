import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Menu = props => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
            <Navbar.Brand href='/todos'><FontAwesomeIcon icon={ faCalendarAlt } /> TodoApp</Navbar.Brand>
            <Navbar.Toggle aria-controls='todoapp-navbar' />
            <Navbar.Collapse id='#todoapp-navbar'>
                <Nav className='mr-auto'>
                    <Link className='nav-link' to='/todos'>Tarefas</Link>
                    <Link className='nav-link' to='/about'>Sobre</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu