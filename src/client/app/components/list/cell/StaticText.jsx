import React from 'react';

export function StaticText ({ value, onClick }) {
    return <td onClick={onClick}>{value}</td>;
}
