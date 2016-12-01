import React from 'react';

import { BaseComponent } from './../BaseComponent.jsx';

export default class TodoForm extends BaseComponent {

    constructor(props) {
        super(props);

        this.state = { item: '' };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        this.props.onSubmit(event, this.state.item);

        if (!event.defaultPrevented) {
            this.setState({ item: '' });
            this.itemInput.focus();
        }

        event.preventDefault();
    }

    onChange(event) {
        this.setState({ item: event.target.value });
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                <input
                    type="text"
                    ref={ (ref) => this.itemInput = ref }
                    onChange={ this.onChange }
                    value={ this.state.item }
                    placeholder="Add new item..."
                />

                <button type="submit">Add</button>
            </form>
        );
    }

}
