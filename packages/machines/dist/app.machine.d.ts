import { CartProduct, Product } from "types";
export declare const appMachine: import("xstate").StateMachine<{
    cartCount: number;
    cartItems: CartProduct[];
    products: Product[];
    useDarkTheme?: boolean | undefined;
}, {
    type: "cart.clear";
} | {
    type: "cart.add";
    id: string;
} | {
    type: "cart.delete";
    id: string;
}, import("xstate").ProvidedActor, import("xstate").ParameterizedObject, import("xstate").ParameterizedObject, string, string, unknown, import("xstate").NonReducibleUnknown, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, {
    type: "cart.clear";
} | {
    type: "cart.add";
    id: string;
} | {
    type: "cart.delete";
    id: string;
}, import("xstate").ProvidedActor, import("xstate").ParameterizedObject, import("xstate").ParameterizedObject, string, string>>;
//# sourceMappingURL=app.machine.d.ts.map