import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

 export default class TodosList extends Component {


componentDidMount() {
    axios.get('http://localhost:3000/stores.js')
        .then(response => {
            this.setState({stores: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
}

todoList() {
    return this.state.stores.map(function(currentTodo, i) {
        return <Todo todo={currentTodo} key={i} />;
    });
}

render() {
    return (
        <div>
            <h3>Todos List</h3>
            <table style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.todoList() }
                </tbody>
            </table>
        </div>
    )
}
}