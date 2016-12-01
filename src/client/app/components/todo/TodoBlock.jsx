import React from 'react';
import { BaseComponent } from './../BaseComponent.jsx';

import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';

export default class TodoBlock extends BaseComponent {

    constructor(props) {
        super(props);

        this.state = { items: [] };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onItemRemove = this.onItemRemove.bind(this);
    }

    onFormSubmit(event, todoItem) {
        this.setState({
            items: this.state.items.concat([{ description: todoItem }])
        });
    }

    onItemRemove(event, todoItem) {
        let itemList = this.state.items;
        let index = itemList.findIndex((item) => item.description === todoItem);

        if (index > -1) {
            itemList.splice(index, 1);
            this.setState({ items: itemList });
        }
    }

    render() {
        return (
            <div>
                <h3>ToDo List</h3>
                <TodoForm onSubmit={ this.onFormSubmit } />
                <TodoList items={ this.state.items } onRemove={ this.onItemRemove } />
            </div>
        );
    }

}
