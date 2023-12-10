import { html, LitElement, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import { classMap } from 'lit-html/directives/class-map.js'
import globalStyles from '../base.css?inline'

@customElement('app-button')
export class AppButton extends LitElement {
  static styles = [unsafeCSS(globalStyles)]

  classes = classMap({
    ['bg-slate-300 hover:bg-slate-200 inline-flex rounded-sm px-4 py-3']: true
  })
  protected render() {
    return html`
      <button
      class="${this.classes}"
      >
      <span>
        ${html`<slot name="label"></slot>`}
      </button>
    `
  }
}
