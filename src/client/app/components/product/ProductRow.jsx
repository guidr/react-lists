import React from 'react';
import { FormattedNumber } from 'react-intl';

import { BaseComponent } from './../BaseComponent.jsx';

export class ProductRow extends BaseComponent {

    render() {
        return (
            <tr>
                <td>{ this.props.description }</td>
                <td>
                    <FormattedNumber
                        value={ this.props.price }
                        style="currency"
                        currency="GBP"
                    />
                </td>
            </tr>
        );
    }

}
