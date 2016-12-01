import React, { PropTypes } from 'react';

export const Text = React.createClass({

    propTypes: {
        value: PropTypes.any,
        onSubmit: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    },

    getInitialState: function () {
        return { value: this.props.value };
    },

    componentDidMount: function () {
        this.editInput.focus();
    },

    onSubmit: function (event) {
        event.target.value = this.state.value;
        this.props.onSubmit(event);

        event.preventDefault();
    },

    onChange: function (event) {
        this.setState({ value: event.target.value });
    },

    render: function () {
        return (
            <td key={this.props.id}>
                <form onSubmit={this.onSubmit} className="ui fluid transparent input">
                    <input
                        ref={(ref) => {this.editInput = ref}}
                        type="text"
                        value={this.state.value}
                        placeholder="Enter value..."
                        onChange={this.onChange}
                        onBlur={this.props.onCancel}
                    />
                </form>
            </td>
        );
    }

});
