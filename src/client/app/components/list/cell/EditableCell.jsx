import React, { PropTypes } from 'react';
import { StaticText } from './StaticText.jsx';
import * as Editable from './editable';

export const EditableCell = React.createClass({

    propTypes: {
        type: PropTypes.string.isRequired,
        value: PropTypes.any,
        onUpdate: PropTypes.func
    },

    getInitialState: function () {
        return {
            value: this.props.value,
            editing: false
        };
    },

    onFormSubmit: function (event) {
        if (this.props.onUpdate) {
            this.props.onUpdate(event);
        }

        if (!event.defaultPrevented) {
            this.setState({ editing: false, value: event.target.value });
        }
    },

    onFormCancel: function (event) {
        this.setState({ editing: false });
    },

    onCellClick: function (event) {
        this.setState({ editing: true });
    },

    render: function () {
        if (this.state.editing) {
            switch (this.props.type) {
                // case 'date':
                //     return <Editable.Date value={this.state.value} onSubmit={this.onFormSubmit} onCancel={this.onFormCancel} />;
                case 'select':
                    return <Editable.Select id={this.props.id} value={this.state.value} options={this.props.options} onUpdate={this.onFormSubmit} />;

                case 'editableText':
                default:
                    return <Editable.Text value={this.state.value} onSubmit={this.onFormSubmit} onCancel={this.onFormCancel} />;
            }
        }

        return <StaticText value={this.state.value} onClick={this.onCellClick} />;
    }

});
