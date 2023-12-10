<script lang="ts">
  import { appMachine } from 'machines'
  import { machineStore } from '../lib/machine.store'
  import { icon, t } from 'utils'
  import { Button } from 'ui-svelte'
  import clsx from 'clsx'

  $: appStore = machineStore(appMachine, true)
  $: store = $appStore
</script>

<div>
  <button class="relative inline-flex text-5xl">
    {@html icon('cart')}
    <span
      class={clsx(
        store.context.cartCount > 0
          ? 'scale-100 opacity-100'
          : 'scale-0 text-transparent opacity-0',
        'absolute right-0 top-0 inline-flex aspect-square w-5 items-center justify-center rounded-full bg-teal-600 text-xs text-white shadow-sm transition-all'
      )}
    >
      {store.context.cartCount > 0 ? store.context.cartCount : ''}
    </span>
  </button>
  {#if store.context.cartCount > 0}
    <ul>
      {#each store.context.cartItems as cartItem}
        <li class="flex gap-x-2">
          <div><strong>{cartItem.title}</strong></div>
          <div>
            <small>{cartItem.inStock ? 'In stock' : 'Out of stock'}</small>
          </div>
          <div>€{cartItem.price}</div>
          <input
            class="inline-flex w-auto border"
            type="number"
            value={cartItem.quantity}
          />
        </li>
      {/each}
    </ul>
  {/if}
  <div class="flex gap-x-2">
    <Button
      on:click={() =>
        appStore.set({
          type: 'cart.add',
          id: 'test3'
        })}>{t('cart.addToCart')}</Button
    >
    <Button
      on:click={() =>
        appStore.set({
          type: 'cart.delete',
          id: 'test3'
        })}>{t('cart.removeFromCart')}</Button
    >
    <Button
      on:click={() =>
        appStore.set({
          type: 'cart.clear'
        })}>{t('cart.clearCart')}</Button
    >
  </div>
</div>
