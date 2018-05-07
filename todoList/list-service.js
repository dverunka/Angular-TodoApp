'use strict';

export default angular.module('todoService', [])

    .service('ListService', function() {

        this.list = [];

        this.getList = function() {
            return this.list;
        };

        this.setList = function(list) {
            this.list = list;
        };

    }).name;