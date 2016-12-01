import React, { Component, PropTypes } from 'react';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import { ListAddForm } from './ListAddForm.jsx';
import { Table } from './Table.jsx';
import { ColumnsActions } from './reflux';
import * as Actions from './actions';

export class ListWidget extends Component {

    constructor(props) {
        super(props);

        const cols = [
            { field: 'addedDate', type: 'relativeTime' },
            // { field: 'id', type: 'staticText' }
        ];

        // this.state = {
        //     cols: cols,
        //     items: props.items,
        //     addColumn: ''
        // };

        // this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
        // this.onChange = this.onChange.bind(this);
        // this.onRemove = this.onRemove.bind(this);
        // this.onHeaderRemove = this.onHeaderRemove.bind(this);
        // this.onAddColumnChange = this.onAddColumnChange.bind(this);
        // this.onAddColumnClick = this.onAddColumnClick.bind(this);
    }

    // onAddFormSubmit(event, item) {
    //     const items = this.state.items.concat([ item ]);
    //     this.setState({ items });
    //     window.localStorage.setItem('list', JSON.stringify(items));
    // }

    // onChange(event, id, field, newValue, oldValue) {
    //     const item = find(this.state.items, { id });
    //     if (item) {
    //         item[field] = newValue;
    //     }

    //     window.localStorage.setItem('list', JSON.stringify(this.state.items));
    // }

    // onRemove(event, item) {
    //     const index = findIndex(this.state.items, { id: item.id });
    //     if (index > -1) {
    //         const items = this.state.items;
    //         items.splice(index, 1);

    //         this.setState({ items });
    //         window.localStorage.setItem('list', JSON.stringify(items));
    //     }
    // }

    // onHeaderRemove(event, field) {
    //     const index = findIndex(this.state.cols, { field });
    //     if (index > -1) {
    //         const cols = this.state.cols;
    //         cols.splice(index, 1);

    //         this.setState({ cols });
    //     }
    // }

    render() {
        return (
            <div>
                <ListAddForm
                    //onSubmit={this.onAddFormSubmit}
                />
                <Table
                    // items={this.state.items}
                    // columns={this.state.cols}
                    // onChange={this.onChange}
                    // onRemove={this.onRemove}
                    // onHeaderRemove={this.onHeaderRemove}
                />
                <br />
                <Actions.AddColumn />
            </div>
        );
    }

    // onAddColumnChange(event) {
    //     this.setState({ addColumn: event.target.value });
    // }

    // onAddColumnClick(event) {
    //     const field = this.state.addColumn;
    //     if (field) {
    //         // const index = findIndex(this.state.cols, { field });
    //         // if (index === -1) {
    //             let type = 'staticText';
    //             switch (field) {
    //                 case 'addedDate' : type = 'relativeTime'; break;
    //                 case 'someText' : type = 'editableText'; break;
    //             }

    //             ColumnsActions.addColumn({ field, type });
    //             // this.setState({ cols: this.state.cols.concat([ { field, type } ]) });
    //         // }

    //         this.setState({ addColumn: '' });
    //     }
    // }

}

ListWidget.propTypes = {
    items: PropTypes.array//.isRequired
};

ListWidget.defaultProps = {
    items: []
}
