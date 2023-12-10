import type { CartProduct, Product } from "types";
export declare const appMachine: import("xstate").StateMachine<{
    cartCount: number;
    cartItems: CartProduct[];
    userEmail?: string | undefined;
    userName?: string | undefined;
    products: Product[];
    useDarkTheme?: boolean | undefined;
}, {
    type: "auth.logIn";
    id: string;
} | {
    type: "auth.logOut";
    id: string;
} | {
    type: "cart.clear";
} | {
    type: "cart.add";
    id: string;
} | {
    type: "cart.delete";
    id: string;
}, import("xstate").ProvidedActor, import("xstate").ParameterizedObject, import("xstate").ParameterizedObject, string, string, unknown, import("xstate").NonReducibleUnknown, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, {
    type: "auth.logIn";
    id: string;
} | {
    type: "auth.logOut";
    id: string;
} | {
    type: "cart.clear";
} | {
    type: "cart.add";
    id: string;
} | {
    type: "cart.delete";
    id: string;
}, import("xstate").ProvidedActor, import("xstate").ParameterizedObject, import("xstate").ParameterizedObject, string, string>>;
//# sourceMappingURL=app.machine.d.ts.map