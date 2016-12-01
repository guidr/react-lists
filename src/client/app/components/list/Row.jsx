import React from 'react';
// import { ListActions } from './reflux';
// import * as Cell from './cell';
// import map from 'lodash/map';

export function Row ({ children }) {
    return <tr>{children}</tr>;
}

// export const RowFull = React.createClass({

//     propTypes: {
//         cols: PropTypes.array.isRequired
//     },

//     defaultProps: {
//         cols: [ ]
//     },

//     onRemoveRow: function (event) {
//         ListActions.removeItem(this.props.id);
//     },

//     onCellUpdate: function (event, field) {
//         ListActions.updateItem(this.props.id, field, event.target.value);
//     },

//     renderColumns: function (columns) {
//         return map(columns, ({ type, field }) => {
//             return <Cell.Factory
//                 key={field}
//                 type={type}
//                 value={this.props[field]}
//                 onUpdate={(event) => this.onCellUpdate(event, field)}
//             />;
//         });
//     },

//     render: function () {
//         return (
//             <tr>
//                 <td>
//                     <a href="#" onClick={this.onRemoveRow}>X</a>
//                 </td>
//                 <Cell.EditableCell key="title" value={this.props.title} onUpdate={(event) => this.onCellUpdate(event, 'title')} />
//                 {this.renderColumns(this.props.cols)}
//             </tr>
//         );
//     }

// });
