<script lang="ts">
    import { appMachine } from 'machines'
    import { machineStore } from '../lib/machine.store'
    import { icon, t } from "utils";
    import { Button } from "ui-svelte";
    import clsx from "clsx";

    $: appStore = machineStore(appMachine, true);
    $: store = $appStore;
</script>

<div>
    <button class="relative inline-flex text-5xl">
        {@html icon('cart')}
        <span class="{clsx(
            store.context.cartCount > 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-0 text-transparent',
            "absolute aspect-square bg-teal-600 inline-flex items-center justify-center rounded-full shadow-sm text-white text-xs top-0 transition-all right-0 w-5"
            )}">
            {store.context.cartCount > 0 ? store.context.cartCount : ''}
        </span>
    </button>
    {#if store.context.cartCount > 0}
        <ul>
            {#each store.context.cartItems as cartItem}
                <li class="flex gap-x-2">
                    <div><strong>{cartItem.title}</strong></div>
                    <div><small>{cartItem.inStock ? 'In stock' : 'Out of stock'}</small></div>
                    <div>€{cartItem.price}</div>
                    <input class="border inline-flex w-auto" type="number" value={cartItem.quantity} />
                </li>
            {/each}
        </ul>
    {/if}
    <div class="flex gap-x-2">
        <Button
            on:click={() => appStore.set({
            type: "cart.add",
            id: 'test3'
        })}
        >{t('cart.addToCart')}</Button>
        <Button
            on:click={() => appStore.set({
            type: "cart.delete",
            id: 'test3'
        })}>{t('cart.removeFromCart')}</Button>
        <Button
            on:click={() => appStore.set({
            type: "cart.clear",
        })}>{t('cart.clearCart')}</Button>
    </div>
</div>