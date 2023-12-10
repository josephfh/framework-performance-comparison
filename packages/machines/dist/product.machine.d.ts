import { Product } from "types";
export declare const productMachine: import("xstate").StateMachine<Product, {
    type: "refresh";
    id: string;
} | {
    type: "updateProduct";
    product: Product;
}, import("xstate").ProvidedActor, import("xstate").ParameterizedObject, import("xstate").ParameterizedObject, string, string, unknown, import("xstate").NonReducibleUnknown, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, {
    type: "refresh";
    id: string;
} | {
    type: "updateProduct";
    product: Product;
}, import("xstate").ProvidedActor, import("xstate").ParameterizedObject, import("xstate").ParameterizedObject, string, string>>;
//# sourceMappingURL=product.machine.d.ts.map