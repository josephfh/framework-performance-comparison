import { assign, createMachine } from "xstate";
import { CartProduct, Product } from "types";

export const appMachine = createMachine({
  id: "app",
  types: {} as {
    context: {
      cartCount: number;
      cartItems: CartProduct[];
      userEmail?: string;
      userName?: string;
      products: Product[];
      useDarkTheme?: boolean;
    };
    events:
      | { type: "auth.logIn"; id: string }
      | { type: "auth.logOut"; id: string }
      | { type: "cart.clear" }
      | { type: "cart.add"; id: string }
      | { type: "cart.delete"; id: string };
  },
  context: {
    cartCount: 0,
    cartItems: [],
    products: [],
  },
  initial: "idle",
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
        browsing: {},
        editingCart: {},
        checkingOut: {},
        paying: {},
        thankYouForBuying: {},
        error: {},
      },
    },
  },
});
