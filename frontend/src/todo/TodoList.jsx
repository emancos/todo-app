import React from 'react'

import { Table } from 'react-bootstrap'
import { faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'

const TodoList = props => {
    
    const renderRows = () => {
        
        const list = props.list || []

        return list.map((todo, i)  => (
            <tr key={ todo._id }>
                <td>{ i+1 }</td>
                <td>{ todo.description }</td>
                <td>
                    <Button variant='warning' size='sm' onClick={ () => props.handleUpdate(todo) }>
                        <FontAwesomeIcon icon={ faPenAlt } />
                    </Button>{' '}
                    <Button variant='danger' size='sm' onClick={ () => props.handleRemove(todo) }>
                        <FontAwesomeIcon icon={ faTrashAlt } />
                    </Button>{' '}
                </td>
            </tr>
        ))
    }

    return(
        <Table 
            responsive='sm' 
            striped 
            bordered 
            hover 
            size="sm"
        >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Descrição</th>
                    <th style={{ width: '1rem' }}>Gerenciar</th>
                </tr>
            </thead>
            <tbody>
                { renderRows() }
            </tbody>
        </Table>
    )
}

export default TodoList