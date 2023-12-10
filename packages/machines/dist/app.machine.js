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
    type: "parallel",
    states: {
        authentication: {
            initial: "unauthenticated",
            states: {
                unauthenticated: {
                    on: {
                        "auth.logIn": {
                            target: "loggingIn",
                        },
                    },
                },
                loggingIn: {
                    always: {
                        target: "authenticated",
                    },
                },
                authenticated: {
                    on: {
                        "auth.logOut": {
                            target: "loggingOut",
                        },
                    },
                },
                loggingOut: {
                    after: {
                        200: {
                            target: "loggedOutConfirmation",
                        },
                    },
                },
                loggedOutConfirmation: {
                    after: {
                        200: {
                            target: "unauthenticated",
                        },
                    },
                },
                requestingPasswordReset: {},
                error: {},
            },
        },
        shopping: {
            initial: "browsing",
            states: {
                browsing: {
                    on: {
                        "cart.clear": {
                            actions: ["clearCart", "recalculateCart"],
                        },
                        "cart.add": {
                            actions: ["addToCart", "recalculateCart"],
                        },
                        "cart.delete": {
                            actions: ["deleteFromCart", "recalculateCart"],
                        },
                    },
                },
                checkingOut: {},
                paying: {},
                thankYouForBuying: {},
                error: {},
            },
        },
    },
}, {
    actions: {
        addToCart: (0, xstate_1.assign)({
            cartItems: function (_a) {
                var context = _a.context, event = _a.event;
                return event.type === "cart.add"
                    ? __spreadArray(__spreadArray([], context.cartItems.filter(function (item) { return item.id !== event.id; }), true), [
                        {
                            id: event.id,
                            quantity: 0,
                            title: "Nice product",
                            inStock: true,
                            price: 150,
                        },
                    ], false) : [];
            },
        }),
        clearCart: (0, xstate_1.assign)({
            cartItems: [],
        }),
        deleteFromCart: (0, xstate_1.assign)({
            cartItems: function (_a) {
                var context = _a.context, event = _a.event;
                return event.type === "cart.delete"
                    ? context.cartItems.filter(function (item) { return item.id !== event.id; })
                    : context.cartItems;
            },
        }),
        recalculateCart: (0, xstate_1.assign)({
            cartCount: function (_a) {
                var context = _a.context;
                return context.cartItems.length;
            },
        }),
    },
});
