import * as React from 'react'

export function Button({
  className,
  text,
  onClick
}: {
  className?: string
  text: string
  onClick: () => void
}): JSX.Element {
  return (
    <button
      className={
        className ||
        'inline-flex rounded-sm bg-slate-300 px-4 py-3 hover:bg-slate-200'
      }
      onClick={onClick}
      type='button'
    >
      {text}{' '}
    </button>
  )
}
