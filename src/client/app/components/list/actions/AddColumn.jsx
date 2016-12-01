import React, { PropTypes } from 'react';
import { ColumnsActions } from './../reflux';
import shortid from 'shortid';

export const AddColumn = React.createClass({

    getInitialState: function () {
        return { type: '' };
    },

    onDropdownChange: function (event) {
        this.setState({ type: event.target.value });
    },

    onSubmit: function (event) {
        if (this.state.type) {
            ColumnsActions.addColumn({ field: shortid.generate(), type: this.state.type });
            this.setState(this.getInitialState());
        }
    },

    render: function () {
        return (
            <div>
                <select value={this.state.type} onChange={this.onDropdownChange}>
                    <option value="">Add column</option>
                    <option value="editableText">Text</option>
                    <option value="date">Date</option>
                    <option value="select">Options</option>
                    <option value="progressbar">Progress Bar</option>
                </select>
                <button type="button" onClick={this.onSubmit}>+</button>
            </div>
        );
    }

});
