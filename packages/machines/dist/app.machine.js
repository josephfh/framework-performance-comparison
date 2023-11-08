"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appMachine = void 0;
var xstate_1 = require("xstate");
exports.appMachine = (0, xstate_1.createMachine)({
    id: "app",
    types: {},
    context: {
        cartCount: 0,
        cartItems: [],
        products: [],
    },
    initial: "idle",
    states: {
        idle: {
            on: {
                "cart.clear": {
                    actions: [
                        (0, xstate_1.assign)({
                            cartItems: [],
                        }),
                    ],
                    target: "recalculate",
                },
                "cart.add": {
                    actions: [
                        (0, xstate_1.assign)({
                            cartItems: function (_a) {
                                var context = _a.context, event = _a.event;
                                return __spreadArray(__spreadArray([], context.cartItems.filter(function (item) { return item.id !== event.id; }), true), [
                                    {
                                        id: event.id,
                                        quantity: 0,
                                        title: "Nice product",
                                        inStock: true,
                                        price: 150,
                                    },
                                ], false);
                            },
                        }),
                    ],
                    target: "recalculate",
                },
                "cart.delete": {
                    actions: [
                        (0, xstate_1.assign)({
                            cartItems: function (_a) {
                                var context = _a.context, event = _a.event;
                                return context.cartItems.filter(function (item) { return item.id !== event.id; });
                            },
                        }),
                    ],
                    target: "recalculate",
                },
            },
        },
        recalculate: {
            entry: [
                (0, xstate_1.assign)({
                    cartCount: function (_a) {
                        var context = _a.context;
                        return context.cartItems.length;
                    },
                }),
            ],
            always: {
                target: "idle",
            },
        },
    },
});
