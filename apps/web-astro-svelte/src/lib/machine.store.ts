import { readable, type Readable } from "svelte/store";
import type { AnyStateMachine, EventFrom, StateFrom } from "xstate";
import { createActor } from "xstate";

type MachineStore<T extends AnyStateMachine> = {
  subscribe: Readable<StateFrom<T>>["subscribe"];
  set: (event: EventFrom<T>) => void;
};

export const machineStore = <T extends AnyStateMachine>(
  machine: any,
  persist: boolean = false
): MachineStore<T> => {
  const restoredState =
    persist &&
    typeof localStorage !== "undefined" &&
    localStorage.getItem(`app${machine.id}`)
      ? JSON.parse(localStorage.getItem(`app${machine.id}`) || "{}")
      : null;

  const actor = createActor(machine, {
    ...(restoredState && { state: restoredState }),
  }).start();

  actor.subscribe((snapshot) => {
    console.log(snapshot);
    if (persist) {
      const persistedState = machine.getPersistedState(actor.getSnapshot());
      localStorage?.setItem(`app${machine.id}`, JSON.stringify(persistedState));
    }
  });

  return {
    subscribe: readable(actor.getSnapshot(), (set) => {
      const { unsubscribe } = actor.subscribe(set);
      return unsubscribe;
    }).subscribe,
    set: actor.send,
  };
};
