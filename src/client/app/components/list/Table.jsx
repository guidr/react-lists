import React, { PropTypes } from 'react';
import { ListActions, ColumnsActions, ListStore, ColumnsStore } from './reflux';
import { Header } from './Header.jsx';
import { Body } from './Body.jsx';

export const Table = React.createClass({

    propTypes: {
        // id: PropTypes.string.isRequired
    },

    getInitialState: function () {
        return { items: [ ] };
    },

    componentDidMount: function () {
        this.unsubscribe = ListStore.listen(this.onListStoreChange);
        ListActions.getItems();
    },

    componentWillUnmount: function () {
        this.unsubscribe();
    },

    onListStoreChange: function (items) {
        this.setState({ items });
    },

    render: function () {
        return (
            <table className="ui compact celled table">
                <Header />
                <Body items={this.state.items} />
            </table>
        );
    }

});
