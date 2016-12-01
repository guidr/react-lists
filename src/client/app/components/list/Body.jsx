import React, { PropTypes } from 'react';
import map from 'lodash/map';
import isPlainObject from 'lodash/isPlainObject';
import { ColumnsActions, ColumnsStore, ListActions } from './reflux';
import { Row } from './Row.jsx';
import * as Cell from './cell';

export const Body = React.createClass({

    propTypes: {
        items: PropTypes.array
    },

    defaultProps: {
        items: [ ]
    },

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

    onRowRemove: function (event, itemId) {
        ListActions.removeItem(itemId);
    },

    onColumnUpdate: function (event, itemId, field) {
        if (isPlainObject(event.target.value)) {
            ColumnsActions.addOption(field, event.target.value);
        } else {
            ListActions.updateItem(itemId, field, event.target.value);
        }
    },

    renderRows: function (items) {
        return map(items, (item) => {
            return (
                <Row key={item.id}>
                    <td>
                        <a href="#" onClick={(event) => this.onRowRemove(event, item.id)}>X</a>
                    </td>
                    {this.renderColumns(item, this.state.columns)}
                </Row>
            );
        });
    },

    renderColumns: function (item, columns) {
        return map(columns, ({ type, field, options }) => {
            return <Cell.Factory
                key={field}
                id={field}
                type={type}
                value={item[field]}
                options={options}
                onUpdate={(event) => this.onColumnUpdate(event, item.id, field)}
            />;
        });
    },

    render: function () {
        return (
            <tbody>{this.renderRows(this.props.items)}</tbody>
        );
    }

});
