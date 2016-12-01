import React from 'react';

import { BaseComponent } from './../BaseComponent.jsx';
import ProductTable from './ProductTable.jsx';

export default class ProductFilterableTable extends BaseComponent {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            filteredList: props.list
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const query = event.target.value;
        this.setState({ query, filteredList: this.filterList(query) });
    }

    filterList(query) {
        return this.props.list.filter((product) => {
            return product.description.indexOf(query) > -1;
        });
    }

    render() {
        return (
            <div>
                <h3>Product list</h3>
                <input
                    type="text"
                    ref={ (ref) => this.searchInput = ref }
                    onChange={ this.onChange }
                    value={ this.state.query }
                />
                <ProductTable
                    list={ this.state.filteredList }
                />
            </div>
        );
    }

    componentDidMount() {
        this.searchInput.focus();
    }

}
