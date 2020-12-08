import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

class Todo extends Component {

    render() {
        return (
            <Card>
                <Card.Header>
                    <PageHeader name='Tarefas' small='Cadastro' />
                </Card.Header>
                <Card.Body>
                    <TodoForm />
                    <TodoList />
                </Card.Body>
            </Card>
        )
    }
}

export default Todo 