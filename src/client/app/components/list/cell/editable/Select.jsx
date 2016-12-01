import React, { PropTypes } from 'react';
import { ColumnsStore } from './../../reflux';
import { Creatable } from 'react-select';
import findIndex from 'lodash/findIndex';
import isEmpty from 'lodash/isEmpty';
import isArray from 'lodash/isArray';
import reverse from 'lodash/reverse';
import find from 'lodash/find';
import clone from 'lodash/clone';

export const Select = React.createClass({

    propTypes: {
        id: PropTypes.string.isRequired,
        value: PropTypes.any,
        options: PropTypes.array,
        onUpdate: PropTypes.func,
        onCancel: PropTypes.func
    },

    defaultProps: {
        options: [ ]
    },

    getInitialState: function () {
        return {
            syncOptions: [ ],
            options: isArray(this.props.options) ? clone(this.props.options) : [ ],
            value: this.props.value
        };
    },

    componentDidMount: function () {
        this.setState({ syncOptions: clone(this.state.options) });
        this.unsubscribe = ColumnsStore.listen((columns) => {
            this.onColumnsStoreChange(find(columns, { field: this.props.id }));
        });
    },

    componentWillUnmount: function () {
        this.unsubscribe();
    },

    onColumnsStoreChange: function (column) {
        const { options } = column;
        if (isArray(options)) {
            this.setState({ options: clone(options), syncOptions: clone(options) });
        }
    },

    onUpdate: function (value) {
        this.setState({ value });

        const sync = clone(this.state.syncOptions);
        if (value && findIndex(sync, { value: value.value }) === -1) {
            sync.push({ value: value.value });
            this.setState({ syncOptions: sync });

            if (this.props.onUpdate) {
                this.props.onUpdate({ target: { value } });
            }
        }

        if (this.props.onUpdate) {
            this.props.onUpdate({ target: { value: value ? value.value : null } });
        }
    },

    render: function () {
        return (
            <td style={{width:'150px', padding:0}} className="selectCell">
                <Creatable
                    className=""
                    value={this.state.value}
                    options={this.state.options}
                    autofocus={true}
                    openOnFocus={true}
                    onChange={this.onUpdate}
                    onBlur={this.props.onCancel}
                />
            </td>
        );
    }

});
