"use client";

import { GlobalStateProvider } from "providers";
import Inner from "./inner";

export default function Cart(): JSX.Element {
  return (
    <main>
      <GlobalStateProvider>
        <Inner />
      </GlobalStateProvider>
    </main>
  );
}
