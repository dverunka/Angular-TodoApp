'use strict';

describe('myApp.todoList module', function () {

    beforeEach(module('todoList'));

    describe('TodoController', function () {

        it('should have empty list of items', inject(function ($controller) {

            var ctrl = ($controller)('TodoController', {
                "$scope": {"$watch": () => {}}, "ListService": {
                    "getList": function () {
                        return [{
                            done: false,
                            text: "a"
                        }];
                    }
                }
            });
            expect(ctrl.list.length).toBe(1);

        }));

        it('should make item "uvarit veceru" undone', inject(function ($controller, ListService) {

            var ctrl = $controller('TodoController', {
                "$scope": {"$watch": () => {}}, "ListService": ListService
            });

            ctrl.text = "uvarit veceru";
            ctrl.addItem();

            expect(ctrl.list[0].done).toBe(false);
            expect(ctrl.list[0].text).toBe("uvarit veceru");

        }))

    });
});