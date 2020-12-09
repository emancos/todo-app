import React, { Component } from 'react'
import axios from 'axios'

import { Card } from 'react-bootstrap'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003/api/todos'

class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            description: '',
            list: []
        }

        this.refresh = this.refresh.bind(this) 
        this.handleAdd = this.handleAdd.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.handleChange = this.handleChange.bind(this)                     
    }

    refresh() {
        axios.get(`${ URL }?sort=-createdAt`)
            .then(resp => this.setState({
                ...this.state,
                description: '',
                list: resp.data
            }))
    }

    handleAdd() {
        const description = this.state.description

        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleUpdate(todo) {
        
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }


    handleChange(e) {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }

    componentDidMount() {
        this.refresh()            
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <PageHeader name='Tarefas' small='Cadastro' />
                </Card.Header>
                <Card.Body>
                    <TodoForm 
                        handleAdd={ this.handleAdd } 
                        handleChange={ this.handleChange }                        
                        description={ this.state.description } 
                    />
                    <TodoList 
                        list={ this.state.list } 
                        handleRemove={ this.handleRemove }
                        handleUpdate={ this.handleUpdate }
                    />
                </Card.Body>
            </Card>
        )
    }
}

export default Todo 