import type { Notification, NotificationType } from 'types'
import { assign, createMachine } from 'xstate'

export const notificationsMachine = createMachine(
  {
    id: 'notifications',
    types: {} as {
      context: {
        notifications: Notification[]
      }
      events: {
        type: 'notification.create'
        message: string
        notificationType?: NotificationType
      }
    },
    context: {
      notifications: []
    },
    initial: 'idle',
    states: {
      idle: {}
    },
    on: {
      'notification.create': {
        actions: ['createNotification']
      }
    }
  },
  {
    actions: {
      createNotification: assign({
        notifications: [
          {
            id: 'test',
            notificationType: 'default',
            message: 'test'
          }
        ]
      })
    }
  }
)
