import React, { Component } from 'react'

class Todo extends Component {

    render() {
        return (
            <div class="alert alert-primary" role="alert">
                <h4 class="alert-heading">ToDo</h4>
                <hr />
                This is a primary alert—check it out! <i className="fas fa-check"></i>
            </div>
        )
    }
}

export default Todo 