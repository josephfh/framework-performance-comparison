<script>
  import { clsx } from 'clsx'
</script>

<button
  on:click
  on:focus
  on:mouseover
  on:mouseenter
  on:mouseleave
  class={clsx(
    $$restProps.class ||
      'inline-flex rounded-sm bg-slate-300 px-4 py-3 hover:bg-slate-200'
  )}
>
  <slot />
</button>
