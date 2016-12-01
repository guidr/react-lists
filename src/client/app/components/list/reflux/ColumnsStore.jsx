import Reflux from 'reflux';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import isArray from 'lodash/isArray';
import clone from 'lodash/clone';

import { ColumnsActions } from './ColumnsActions.jsx';

const DEFAULT_COLUMN = {
    field: 'title',
    title: 'Title',
    type: 'editableText'
};

const TEST_COLUMN = {
    field: 'test',
    title: 'Test',
    type: 'select'
};

export const ColumnsStore = Reflux.createStore({

    columns: [ ],

    listenables: [ ColumnsActions ],

    triggerUpdate: function () {
        if (this.columns.length === 0) {
            this.columns = [ DEFAULT_COLUMN ];
        }

        window.localStorage.setItem('columns', JSON.stringify(this.columns));
        this.trigger(clone(this.columns));
    },

    onGetColumns: function () {
        this.columns = JSON.parse(window.localStorage.getItem('columns')) || [];
        this.triggerUpdate();
    },

    onAddColumn: function (column) {
        this.columns.push(column);
        this.triggerUpdate();
    },

    onRemoveColumn: function (field) {
        const index = findIndex(this.columns, { field });
        if (index > -1) {
            this.columns.splice(index, 1);
            this.triggerUpdate();
        }
    },

    onAddOption: function (field, option) {
        const item = find(this.columns, { field });
        if (item) {
            if (!isArray(item.options)) {
                item.options = [];
            }

            item.options.push(option);
            this.triggerUpdate();

            console.log('Added:');
            for (let opt of item.options) {
                console.log('= ' + opt.value);
            }

        }
    }

});


