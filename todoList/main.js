'use strict';

import listService from "./list-service"

export default angular.module('todoList', ['ngRoute', 'todoService'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/todoList', {
            templateUrl: 'app/todoList/main.html',
            controller: 'TodoController'
        });
    }])

    .controller('TodoController', ['$scope', 'ListService', function ($scope, ListService) {

        this.list = ListService.getList();

        $scope.$watch(() => { return this.list }, (newVal, oldVal) => {
            ListService.setList(NewVal);
        }, true);

        this.addItem = () => {

            this.list.push({
                text: angular.copy(this.text),
                done: false
            });
            this.text = '';
        };

        this.deleteItem = (item) => {
            this.list.splice(item, 1);
        };

        this.deleteDone = () => {
            this.list = this.list.filter((item) => {
                return !item.done
            });
        };

        this.deleteAll = () => {
            this.list = [];
        };

        // this.show = "all";

    }]).name;