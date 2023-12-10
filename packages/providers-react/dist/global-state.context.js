import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from "react";
import { useSelector } from "@xstate/react";
import { appMachine } from "machines";
import { createActor } from "xstate";
export const GlobalStateContext = createContext({
    addToCart: () => null,
    cartCount: 0,
    cartItems: [],
    clearCart: () => null,
    deleteFromCart: () => null,
});
const restoredState = typeof localStorage !== "undefined" && localStorage.getItem("app")
    ? JSON.parse(localStorage.getItem("app") || "{}")
    : null;
const appService = createActor(appMachine, Object.assign({}, (restoredState && { state: restoredState }))).start();
appService.subscribe((snapshot) => {
    console.log(snapshot);
    const persistedState = appMachine.getPersistedState(appService.getSnapshot());
    localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem("app", JSON.stringify(persistedState));
});
export function GlobalStateProvider({ children, }) {
    const values = {
        addToCart: (id) => {
            appService.send({ type: "cart.add", id });
        },
        cartCount: useSelector(appService, (state) => state.context.cartItems.length),
        cartItems: useSelector(appService, (state) => state.context.cartItems),
        clearCart: () => {
            appService.send({ type: "cart.clear" });
        },
        deleteFromCart: (id) => {
            appService.send({ type: "cart.delete", id });
        },
    };
    return (_jsx(GlobalStateContext.Provider, { value: values, children: children }));
}
