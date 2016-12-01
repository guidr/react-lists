import React from 'react';
import { render } from 'react-dom';

import { IntlProvider } from 'react-intl';
import { ListWidget } from './components/list/ListWidget.jsx';

// require('semantic-ui-less/semantic.less');
require('semantic-ui-css/semantic.min.css');
require('react-datepicker/dist/react-datepicker.css');
require('react-select/dist/react-select.css');
require('./slider.less');

class App extends React.Component {
    render() {
        return (<ListWidget />);
    }
}

render(
    <IntlProvider locale="en-GB">
        <App />
    </IntlProvider>,
    document.getElementById('app')
);

// "use strict";
// This is a workaround used alongside the webpack-dev-server hot-module-reload feature
//  - it's quite chatty on the console, and there's no currently no configuration option
//    to silence it. Only used in development.
// Prevent messages starting with [HMR] or [WDS] from being printed to the console
// (function(global) {
//     var console_log = global.console.log
//     global.console.log = function() {
//         if (!(
//             arguments.length == 1 &&
//             typeof arguments[0] === 'string' &&
//             arguments[0].match(/^\[(HMR|WDS)\]/)
//         )) {
//             console_log.apply(global.console,arguments)
//         }
//     }
// })(window);
