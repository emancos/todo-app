import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const TodoForm = props => {
    return (
        <Form className='todoForm'>
            <Row>
                <Col xs={12} sm={8} md={10}>
                    <Form.Group controlId='description'>
                        <Form.Control type='text' placeholder='Adicione uma tarefa..' 
                            value={ props.description } 
                            onChange={ props.handleChange } />
                    </Form.Group>
                </Col>
                <Col xs={12} sm={2} md={2}>
                    <Button varint='primary'
                    onClick={ props.handleAdd }>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>{' '}
                </Col>
            </Row>
        </Form>
    )
}

export default TodoForm