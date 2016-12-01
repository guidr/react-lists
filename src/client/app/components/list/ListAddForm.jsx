import React, { Component, PropTypes } from 'react';
import { ListActions } from './reflux';
import shortid from 'shortid';

export class ListAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };

        // this.onSubmit = this.onSubmit.bind(this);
        // this.onTitleChange = this.onTitleChange.bind(this);
    }

    onSubmit(event) {
        // this.props.onSubmit(event, {
        //     id: shortid.generate(),
        //     title: this.state.title,
        //     addedDate: new Date()
        // });
        ListActions.addItem({
            id: shortid.generate(),
            title: this.state.title,
            addedDate: new Date()
        });

        if (!event.defaultPrevented) {
            this.setState({ title: '' });
            this.refs.titleInput.focus();
        }

        event.preventDefault();
    }

    onTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    render() {
        return (
            <form onSubmit={(event) => this.onSubmit(event)}>
                <input
                    type="text"
                    ref="titleInput"
                    onChange={(event) => this.onTitleChange(event)}
                    value={this.state.title}
                    placeholder="Add new item..."
                />

                <button type="submit">Add</button>
            </form>
        );
    }

}

ListAddForm.propTypes = {
    // onSubmit: PropTypes.func
};
