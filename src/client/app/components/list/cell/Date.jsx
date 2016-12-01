import React, { PropTypes } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { StaticText } from './StaticText.jsx';

const DateWrapper = React.createClass({
    propTypes: {
        onClick: PropTypes.func,
        value: PropTypes.string
    },

    render: function () {
        return <div onClick={this.props.onClick}>{this.props.value}</div>;
    }
});

export const Date = React.createClass({

    propTypes: {
        value: PropTypes.any,
        onUpdate: PropTypes.func
    },

    getInitialState: function () {
        return { value: this.props.value ? moment(this.props.value, 'DD/MM/YYYY') : null };
    },

    onUpdate: function (date) {
        this.setState({ value: date });
        this.props.onUpdate({ target: { value: date ? date.format('DD/MM/YYYY') : '' } });
    },

    render: function () {
        return (
            <td className="datePicker">
                <DatePicker
                    customInput={<DateWrapper />}
                    selected={this.state.value}
                    locale="en-gb"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    fixedHeight
                    isClearable={false}
                    todayButton="Today"
                    onChange={this.onUpdate}
                />
            </td>
        );
    }

});

