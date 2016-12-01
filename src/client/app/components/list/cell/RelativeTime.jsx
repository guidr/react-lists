import React from 'react';
import { FormattedRelative } from 'react-intl';

export function RelativeTime ({ value }) {
    return <td><FormattedRelative value={value} /></td>;
}
