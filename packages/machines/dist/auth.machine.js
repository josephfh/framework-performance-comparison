"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMachine = void 0;
var xstate_1 = require("xstate");
exports.authMachine = (0, xstate_1.createMachine)({
    id: "todos4",
    types: {},
    context: {
        count: "33",
        todo: "",
        todos: [
            {
                id: "1",
                title: "Learn state machines",
                completed: false,
            },
        ],
        filter: "all",
    },
    on: {
        "cart.add": {
            actions: [
                (0, xstate_1.assign)({
                    count: function (_a) {
                        var event = _a.event;
                        return event.id;
                    },
                }),
            ],
        },
    },
});
