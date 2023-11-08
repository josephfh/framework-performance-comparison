import { createContext, type ReactNode } from "react";
import { useSelector } from "@xstate/react";
import { appMachine } from "machines";
import { createActor } from "xstate";
import type { CartProduct } from "types";

interface ContextProviderProps {
  children?: ReactNode;
}

interface GlobalStateContextType {
  addToCart: (id: string) => void;
  cartCount: number;
  cartItems: CartProduct[];
  clearCart: () => void;
  deleteFromCart: (id: string) => void;
}

export const GlobalStateContext = createContext<GlobalStateContextType>({
  addToCart: () => null,
  cartCount: 0,
  cartItems: [],
  clearCart: () => null,
  deleteFromCart: () => null,
});

const restoredState =
  typeof localStorage !== "undefined" && localStorage.getItem("app")
    ? JSON.parse(localStorage.getItem("app") || "{}")
    : null;

const appService = createActor(appMachine, {
  ...(restoredState && { state: restoredState }),
}).start();

appService.subscribe((snapshot) => {
  console.log(snapshot);
  const persistedState = appMachine.getPersistedState(appService.getSnapshot());
  localStorage?.setItem("app", JSON.stringify(persistedState));
});

export function GlobalStateProvider({
  children,
}: ContextProviderProps): JSX.Element {
  const values = {
    addToCart: (id: string) => {
      appService.send({ type: "cart.add", id });
    },
    cartCount: useSelector(
      appService,
      (state) => state.context.cartItems.length
    ),
    cartItems: useSelector(appService, (state) => state.context.cartItems),
    clearCart: () => {
      appService.send({ type: "cart.clear" });
    },
    deleteFromCart: (id: string) => {
      appService.send({ type: "cart.delete", id });
    },
  };

  return (
    <GlobalStateContext.Provider value={values}>
      {children}
    </GlobalStateContext.Provider>
  );
}
