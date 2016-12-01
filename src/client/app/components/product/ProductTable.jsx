import React from 'react';
import { BaseComponent } from './../BaseComponent.jsx';
import { ProductRow } from './ProductRow.jsx';

export default class ProductTable extends BaseComponent {

    getRow(product, index) {
        return (
            <ProductRow
                key={ index }
                { ...product }
            />
        );
    }

    renderList() {
        if (this.props.list.length) {
            return this.props.list.map(this.getRow);
        }

        return (
            <p>No results found</p>
        );
    }

    render() {
        return (
            <table>
                <tbody>
                    { this.renderList() }
                </tbody>
            </table>
        );
    }

}

// @see http://ricostacruz.com/cheatsheets/react.html
ProductTable.propTypes = {
  list: React.PropTypes.array.isRequired
};

// ProductTable.defaultProps = {
//   list: []
// };
