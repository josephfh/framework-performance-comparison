import { type ReactNode } from "react";
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
export declare const GlobalStateContext: import("react").Context<GlobalStateContextType>;
export declare function GlobalStateProvider({ children, }: ContextProviderProps): JSX.Element;
export {};
//# sourceMappingURL=global-state.context.d.ts.map