import React from 'react';

import { BaseComponent } from './../BaseComponent.jsx';
import TodoListItem from './TodoListItem.jsx';

export default class TodoList extends BaseComponent {

    constructor(props) {
        super(props);

        this.onItemRemove = this.onItemRemove.bind(this);
    }

    onItemRemove(event, item) {
        if (this.props.onRemove) {
            this.props.onRemove(event, item);
        }
    }

    renderItem(item, index) {
        return (
            <TodoListItem key={ index } onRemove={ this.onItemRemove } { ...item } />
        );
    }

    renderList() {
        if (this.props.items.length) {
            return this.props.items.map(this.renderItem.bind(this));
        }

        return (
            <li>Empty list</li>
        );
    }

    render() {
        return (
            <ul>{ this.renderList() }</ul>
        );
    }

}

TodoList.defaultProps = {
    items: []
};
