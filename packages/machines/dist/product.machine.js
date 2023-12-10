"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productMachine = void 0;
var xstate_1 = require("xstate");
// const fetcher = fromPromise(
//   async ({ input }: { input: { userId: string } }) => {
//     const user = await fetchProduct(input.userId);
//     return user;
//   }
// );
exports.productMachine = (0, xstate_1.createMachine)({
    id: "product",
    types: {},
    context: {
        id: "",
    },
    initial: "fetchingProductInformation",
    states: {
        fetchingProductInformation: {
            invoke: {
                src: "fetchData",
                id: "fetch2",
                onDone: {
                    actions: function (_a) {
                        var event = _a.event;
                        event.output; // strongly typed as { result: string }
                    },
                },
                input: { userId: "42" }, // strongly typed
            },
        },
        updated: {
            after: {
                5000: {
                    target: "healthy",
                },
            },
            on: {
                refresh: {
                    target: "fetchingProductInformation",
                },
            },
        },
        healthy: {
            after: {
                60000: {
                    target: "stale",
                },
            },
            on: {
                refresh: {
                    target: "fetchingProductInformation",
                },
            },
        },
        stale: {
            on: {
                refresh: {
                    target: "fetchingProductInformation",
                },
            },
        },
        error: {
            on: {
                refresh: {
                    target: "fetchingProductInformation",
                },
            },
        },
    },
}, {
// actions: {
//   sendProductToParent: ({ context }) =>
//     raise({ type: "updateProduct", product: context }),
// },
});
