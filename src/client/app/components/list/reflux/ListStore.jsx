import Reflux from 'reflux';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import { ListActions } from './ListActions.jsx';

export const ListStore = Reflux.createStore({

    items: [ ],

    listenables: [ ListActions ],

    // init: function () {
    //     this.listenTo(ListActions.testAction, this.onTestAction);

    //     if (window.localStorage.getItem('list')) {
    //         this.items = JSON.parse(window.localStorage.getItem('list'));
    //     }
    // },

    // getInitialState: function () {
    //     return { items: [ ] };
    // },

    triggerUpdate: function () {
        window.localStorage.setItem('list', JSON.stringify(this.items));
        this.trigger(this.items);
    },

    onGetItems: function () {
        this.items = JSON.parse(window.localStorage.getItem('list'));
        this.triggerUpdate();
    },

    onAddItem: function (item) {
        this.items.push(item);
        this.triggerUpdate();
    },

    onRemoveItem: function (itemId) {
        const index = findIndex(this.items, { id: itemId });
        if (index > -1) {
            this.items.splice(index, 1);
            this.triggerUpdate();
        }
    },

    onUpdateItem: function (id, field, value) {
        const item = find(this.items, { id });
        if (item) {
            item[field] = value;
        }

        this.triggerUpdate();
    }

});
