var React = require('react');
var ReactDOM = require('react-dom');
// var { Route, Router, IndexRoute, hashHistory } = require('react-router');
// var Main = require('Main');
var TodoApp = require('TodoApp');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
)