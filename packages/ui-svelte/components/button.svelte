<script>
    import { clsx } from 'clsx'

</script>

<button on:click
        on:focus
        on:mouseover
        on:mouseenter
        on:mouseleave
        class={ clsx($$restProps.class || 'bg-slate-300 hover:bg-slate-200 inline-flex rounded-sm px-4 py-3') } 
    >
        <slot/>
</button>
