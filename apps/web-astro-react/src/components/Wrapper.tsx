import { Test } from "./Test";
import { GlobalStateProvider } from "providers";

export const Wrapper = () => {
  return (
    <GlobalStateProvider>
      <Test />
    </GlobalStateProvider>
  );
};
