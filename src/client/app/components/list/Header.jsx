import React, { PropTypes } from 'react';
import { ColumnsActions, ColumnsStore } from './reflux';
import map from 'lodash/map';

export const Header = React.createClass({

    getInitialState: function () {
        return { columns: [ ] };
    },

    componentDidMount: function () {
        this.unsubscribe = ColumnsStore.listen(this.onColumnsStoreChange);
        ColumnsActions.getColumns();
    },

    componentWillUnmount: function () {
        this.unsubscribe();
    },

    onColumnsStoreChange: function (columns) {
        this.setState({ columns });
    },

    onColumnRemove: function (event, field) {
        ColumnsActions.removeColumn(field);
    },

    renderHeaders: function (columns) {
        return map(columns, (column) => {
            const styles = { };

            if (column.type === 'select') {
                styles.width = '150px';
            }

            return (
                <th key={column.field} style={styles}>
                    <span>{column.title || column.field}</span>&nbsp;
                    <a href="#" onClick={(event) => this.onColumnRemove(event, column.field)}>x</a>
                </th>
            );
        });
    },

    render: function () {
        return (
            <thead>
                <tr>
                    <th></th>
                    {this.renderHeaders(this.state.columns)}
                </tr>
            </thead>
        );
    }

});
