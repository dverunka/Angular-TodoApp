'use strict';

import 'bootstrap/dist/css/bootstrap.css';
import appCss from "./app.css"
import angular from 'angular';
import uirouter from 'angular-ui-router';
import todoList from "./todoList/main"
import ngRoute from "angular-route"
import routing from './app.config';

// Declare app level module which depends on views, and components
angular.module('todoApp', ['ngRoute', 'todoList', 'ui.router', "appTemplates"])

    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/todoList'});

    }])

    .config(routing);