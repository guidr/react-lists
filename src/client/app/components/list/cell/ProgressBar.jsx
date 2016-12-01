import React, { PropTypes } from 'react';
import Slider from 'react-rangeslider';

export const ProgressBar = React.createClass({

    propTypes: {
        value: PropTypes.any,
        onUpdate: PropTypes.func
    },

    getInitialState: function () {
        return { value: this.props.value || 0 };
    },

    onUpdate: function (value) {
        this.setState({ value });
        this.props.onUpdate({ target: { value } });
    },

    render: function () {
        return (
            <td style={{width:'80px'}}>
                <Slider
                    value={this.state.value}
                    onChange={this.onUpdate}
                />
            </td>
        );

        return (
            <td>
                <table style={{width:'100%'}}><tbody><tr>
                    <td style={{width:'80px'}}>
                        <Slider
                            value={this.state.value}
                            onChange={this.onUpdate}
                        />
                    </td>
                    <td style={{textAlign:'right'}}>{this.state.value}%</td>
                </tr></tbody></table>

            </td>
        );
    }

});
