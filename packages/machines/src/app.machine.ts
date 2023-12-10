import { assign, createMachine, sendTo } from 'xstate'
import type { CartProduct, Product } from 'types'
import { notificationsMachine } from './notifications.machine'

export const appMachine = createMachine(
  {
    id: 'app',
    types: {} as {
      context: {
        cartCount: number
        cartItems: CartProduct[]
        isLoading?: boolean
        isLoggedIn?: boolean
        notifications: Notification[]
        userEmail?: string
        userName?: string
        products: Product[]
        useDarkTheme?: boolean
        url?: string
      }
      events:
        | { type: 'auth.logIn'; id: string }
        | { type: 'auth.logOut'; id: string }
        | { type: 'cart.clear' }
        | { type: 'cart.add'; id: string }
        | { type: 'cart.delete'; id: string }
    },
    context: {
      cartCount: 0,
      cartItems: [],
      notifications: [],
      products: []
    },
    type: 'parallel',
    states: {
      test: {
        invoke: [
          {
            src: notificationsMachine,
            systemId: 'notifier'
          }
        ]
      },
      authentication: {
        initial: 'unauthenticated',
        states: {
          unauthenticated: {
            on: {
              'auth.logIn': {
                target: 'loggingIn'
              }
            }
          },
          loggingIn: {
            always: {
              target: 'authenticated'
            }
          },
          authenticated: {
            on: {
              'auth.logOut': {
                target: 'loggingOut'
              }
            }
          },
          loggingOut: {
            after: {
              200: {
                target: 'loggedOutConfirmation'
              }
            }
          },
          loggedOutConfirmation: {
            after: {
              200: {
                target: 'unauthenticated'
              }
            }
          },
          requestingPasswordReset: {},
          error: {}
        }
      },
      shopping: {
        initial: 'browsing',
        states: {
          browsing: {
            on: {
              'cart.clear': {
                actions: ['clearCart', 'recalculateCart']
              },
              'cart.add': {
                actions: ['addToCart', 'recalculateCart']
              },
              'cart.delete': {
                actions: [
                  'deleteFromCart',
                  'recalculateCart'
                  // sendTo(({ system }) => system.get('notifier'), {
                  //   type: 'notification.create',
                  //   notificationType: 'default',
                  //   message: 'test2',
                  //   id: 'test2'
                  // })
                ]
              }
            }
          },
          checkingOut: {},
          paying: {},
          thankYouForBuying: {},
          error: {}
        }
      }
    }
  },
  {
    actions: {
      addToCart: assign({
        cartItems: ({ context, event }) =>
          event.type === 'cart.add'
            ? [
                ...context.cartItems.filter((item) => item.id !== event.id),
                {
                  id: event.id,
                  quantity: 0,
                  title: 'Nice product',
                  inStock: true,
                  price: 150
                }
              ]
            : []
      }),
      clearCart: assign({
        cartItems: []
      }),
      deleteFromCart: assign({
        cartItems: ({ context, event }) =>
          event.type === 'cart.delete'
            ? context.cartItems.filter((item) => item.id !== event.id)
            : context.cartItems
      }),
      recalculateCart: assign({
        cartCount: ({ context }) => context.cartItems.length
      })
    }
  }
)
