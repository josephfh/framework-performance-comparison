import clsx from 'clsx'

export function Badge({
  className,
  count
}: {
  className?: string
  count: number
}): JSX.Element {
  return (
    <span
      className={
        className ||
        clsx(
          count > 0
            ? 'scale-100 opacity-100'
            : 'scale-0 text-transparent opacity-0',
          'absolute right-0 top-0 inline-flex aspect-square w-5 items-center justify-center rounded-full bg-teal-600 text-xs text-white shadow-sm transition-all'
        )
      }
    >
      {count ? count : null}
    </span>
  )
}
