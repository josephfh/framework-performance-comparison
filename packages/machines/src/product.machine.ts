import { createMachine, fromPromise, raise } from 'xstate'
import type { Product } from 'types'

// const fetcher = fromPromise(
//   async ({ input }: { input: { userId: string } }) => {
//     const user = await fetchProduct(input.userId);

//     return user;
//   }
// );
export const productMachine = createMachine(
  {
    id: 'product',
    types: {} as {
      //   actors: {
      //     src: "fetchData"; // src name (inline behaviors ideally inferred)
      //     id: "fetch1" | "fetch2"; // possible ids (optional)
      //     logic: typeof fetcher;
      //   };
      context: Product
      events:
        | { type: 'refresh'; id: string }
        | { type: 'updateProduct'; product: Product }
      //   actions: {
      //     sendProductToParent: () => void;
      //   };
    },
    context: {
      id: ''
    },
    initial: 'fetchingProductInformation',
    states: {
      fetchingProductInformation: {
        invoke: {
          src: 'fetchData', // strongly typed
          id: 'fetch2', // strongly typed
          onDone: {
            actions: ({ event }) => {
              event.output // strongly typed as { result: string }
            }
          },
          input: { userId: '42' } // strongly typed
        }
      },
      updated: {
        after: {
          5000: {
            target: 'healthy'
          }
        },
        on: {
          refresh: {
            target: 'fetchingProductInformation'
          }
        }
      },
      healthy: {
        after: {
          60000: {
            target: 'stale'
          }
        },
        on: {
          refresh: {
            target: 'fetchingProductInformation'
          }
        }
      },
      stale: {
        on: {
          refresh: {
            target: 'fetchingProductInformation'
          }
        }
      },
      error: {
        on: {
          refresh: {
            target: 'fetchingProductInformation'
          }
        }
      }
    }
  },
  {
    // actions: {
    //   sendProductToParent: ({ context }) =>
    //     raise({ type: "updateProduct", product: context }),
    // },
  }
)
