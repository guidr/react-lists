import React from 'react';

import { EditableCell } from './EditableCell.jsx';
import { StaticText } from './StaticText.jsx';
import { RelativeTime } from './RelativeTime.jsx';
import { Date } from './Date.jsx';
// import { Select } from './Select.jsx';
import { ProgressBar } from './ProgressBar.jsx';

export { RelativeTime, EditableCell, StaticText, Date, ProgressBar }

export function Factory ({ id, type, value, options, onUpdate }) {
    switch (type) {
        case 'relativeTime':
            return <RelativeTime value={value} />;

        case 'date':
            return <Date value={value} onUpdate={onUpdate} />;

        case 'editableText':
        case 'select':
            return <EditableCell
                type={type}
                value={value}
                onUpdate={onUpdate}
                id={id}
                options={options}
            />;

        // case 'select':
        //     return <Select id={id} value={value} options={options} onUpdate={onUpdate} />;

        case 'progressbar' :
            return <ProgressBar value={value} onUpdate={onUpdate} />

        case 'staticText':
        default:
            return <StaticText value={value} />;
    }
}
