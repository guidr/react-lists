import React from 'react';

import { BaseComponent } from './../BaseComponent.jsx';

export default class TodoListItem extends BaseComponent {

    constructor(props) {
        super(props);

        this.state = { done: this.props.done || false }

        this.onClick = this.onClick.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onClick(event) {
        this.setState({ done: true });
    }

    onRemove(event) {
        this.props.onRemove(event, this.props.description);
    }

    renderTitle() {
        if (this.state.done === true) {
            return (<strike>{ this.props.description }</strike>);
        }

        return (<span onClick={this.onClick}>{ this.props.description }</span>);
    }

    render() {
        return (
            <li>
                { this.renderTitle() }
                ( <a href="#" onClick={ this.onRemove }>X</a> )
            </li>
        );
    }

}
