<script setup lang="ts">
import { useMachine } from '@xstate/vue'
import { appMachine } from 'machines'
import { clsx } from 'clsx'
import { icon, t } from 'utils'

const { snapshot, send } = useMachine(appMachine, { devTools: true })

const show = ref(false)
</script>

<template>
  <div>
    <button class="relative inline-flex text-5xl">
      <div v-html="icon('cart')"></div>
      <span
        :class="
          clsx(
            `absolute right-0 top-0 inline-flex aspect-square w-5 items-center justify-center rounded-full bg-teal-600 text-xs text-white shadow-sm transition-all`,
            snapshot.context.cartCount > 0
              ? 'scale-100 opacity-100'
              : 'scale-0 text-transparent opacity-0'
          )
        "
      >
        {{ snapshot.context.cartCount > 0 ? snapshot.context.cartCount : '' }}
      </span>
    </button>
    <ul v-if="snapshot.context.cartCount > 0">
      <li v-for="cartItem in snapshot.context.cartItems" class="flex gap-x-2">
        <div>
          <strong>{{ cartItem.title }}</strong>
        </div>
        <div>
          <small>{{ cartItem.inStock ? 'In stock' : 'Out of stock' }}</small>
        </div>
        <div>€{{ cartItem.price }}</div>
        <input
          class="inline-flex w-auto border"
          type="number"
          :value="cartItem.quantity"
        />
      </li>
    </ul>
    <div class="flex gap-x-2">
      <Button @click="send({ type: 'cart.add', id: 'test3' })">{{
        t('cart.addToCart')
      }}</Button>
      <Button @click="send({ type: 'cart.delete', id: 'test3' })">{{
        t('cart.removeFromCart')
      }}</Button>
      <Button @click="send({ type: 'cart.clear' })">{{
        t('cart.clearCart')
      }}</Button>
    </div>
  </div>
</template>
