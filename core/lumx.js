/* eslint-disable import/unambiguous */

angular.module('lumx.utils.depth', []);
angular.module('lumx.utils.enter-keydown', []);
angular.module('lumx.utils.event-scheduler', []);
angular.module('lumx.utils.focus-on-init', []);
angular.module('lumx.utils.focus-trap', []);
angular.module('lumx.utils.stop-propagation', []);
angular.module('lumx.utils.utils', []);

angular.module('lumx.utils', [
    'lumx.utils.depth',
    'lumx.utils.enter-keydown',
    'lumx.utils.event-scheduler',
    'lumx.utils.focus-on-init',
    'lumx.utils.focus-trap',
    'lumx.utils.stop-propagation',
    'lumx.utils.utils',
]);

angular.module('lumx.button', []);
angular.module('lumx.checkbox', []);
angular.module('lumx.chip', []);
angular.module('lumx.data-table', []);
angular.module('lumx.dialog', ['lumx.utils.event-scheduler']);
angular.module('lumx.dropdown', ['lumx.utils.event-scheduler']);
angular.module('lumx.grid', []);
angular.module('lumx.icon', []);
angular.module('lumx.link', []);
angular.module('lumx.list', []);
angular.module('lumx.notification', ['lumx.utils.event-scheduler']);
angular.module('lumx.progress', []);
angular.module('lumx.radio-button', []);
angular.module('lumx.select', []);
angular.module('lumx.side-navigation', []);
angular.module('lumx.switch', []);
angular.module('lumx.table', []);
angular.module('lumx.tabs', []);
angular.module('lumx.text-field', []);
angular.module('lumx.thumbnail', []);
angular.module('lumx.toolbar', []);
angular.module('lumx.tooltip', []);

angular.module('lumx', [
    'lumx.button',
    'lumx.checkbox',
    'lumx.chip',
    'lumx.data-table',
    'lumx.dialog',
    'lumx.dropdown',
    'lumx.grid',
    'lumx.icon',
    'lumx.link',
    'lumx.list',
    'lumx.notification',
    'lumx.progress',
    'lumx.radio-button',
    'lumx.select',
    'lumx.side-navigation',
    'lumx.switch',
    'lumx.table',
    'lumx.tabs',
    'lumx.text-field',
    'lumx.thumbnail',
    'lumx.toolbar',
    'lumx.tooltip',
    'lumx.utils',
]);