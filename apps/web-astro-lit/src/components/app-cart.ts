import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import { createActor } from 'xstate'
import { SelectorController } from 'xstate-lit'
import globalStyles from '../base.css?inline'
import { icon, t } from 'utils'
import { appMachine } from 'machines'
import './app-button'
import { clsx } from 'clsx'

const actor = createActor(appMachine).start()

@customElement('app-cart')
export class AppCart extends LitElement {
  cartCount = new SelectorController(this, actor, (state) => {
    return state.context.cartCount
  })

  cartItems = new SelectorController(this, actor, (state) => {
    return state.context.cartItems
  })

  isActive = new SelectorController(
    this,
    actor,
    (state) => state.value === 'active'
  )

  static styles = [unsafeCSS(globalStyles)]

  render() {
    return html`
      <slot></slot>
      <div>
        <button class="relative inline-flex text-5xl">
          <div .innerHTML="${icon('cart')}"></div>
          <span
            class="${clsx(
              this.cartCount.value > 0
                ? 'scale-100 opacity-100'
                : 'scale-0 text-transparent opacity-0',
              'absolute right-0 top-0 inline-flex aspect-square w-5 items-center justify-center rounded-full bg-teal-600 text-xs text-white shadow-sm transition-all'
            )}"
          >
            ${this.cartCount.value > 0 ? this.cartCount.value : ''}
          </span>
        </button>
        ${this.cartCount.value > 0
          ? html`
              <ul>
                ${this.cartItems.value.map(
                  (cartItem) =>
                    html`<li class="flex gap-x-2">
                      <div>
                        <strong>${cartItem.title}</strong>
                      </div>
                      <div>
                        <small
                          >${cartItem.inStock
                            ? 'In stock'
                            : 'Out of stock'}</small
                        >
                      </div>
                      <div>€${cartItem.price}</div>
                      <input
                        class="inline-flex w-auto border"
                        type="number"
                        value="${cartItem.quantity}"
                      />
                    </li>`
                )}
              </ul>
            `
          : null}
        <div class="flex gap-x-2">
          <app-button
            @click="${() =>
              actor.send({
                type: 'cart.add',
                id: 'test3'
              })}"
          >
            <span slot="label">${t('cart.addToCart')}</span>
          </app-button>
          <app-button
            @click="${() =>
              actor.send({
                type: 'cart.delete',
                id: 'test3'
              })}"
          >
            <span slot="label">${t('cart.removeFromCart')}</span>
          </app-button>
          <app-button
            @click="${() =>
              actor.send({
                type: 'cart.clear'
              })}"
          >
            <span slot="label">${t('cart.clearCart')}</span>
          </app-button>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-cart': AppCart
  }
}
