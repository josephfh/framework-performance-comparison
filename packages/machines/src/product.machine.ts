import { createMachine, fromPromise, raise } from "xstate";
import { Product } from "types";

export const productMachine = createMachine(
  {
    id: "product",
    types: {} as {
      context: Product;
      events:
        | { type: "refresh"; id: string }
        | { type: "updateProduct"; product: Product };
      actions: {
        sendProductToParent: () => void;
      };
    },
    context: {
      id: "",
    },
    initial: "fetchingProductInformation",
    states: {
      fetchingProductInformation: {
        invoke: {
          src: fromPromise(async () => true),
          onDone: {
            actions: ["sendProductToParent"],
            target: "updated",
          },
          onError: {
            target: "error",
          },
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
  },
  {
    actions: {
      sendProductToParent: ({ context }) =>
        raise({ type: "updateProduct", product: context }),
    },
  }
);
