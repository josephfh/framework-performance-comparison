'use client'

import { GlobalStateProvider } from '../../../packages/providers-react/src'
import Inner from './inner'

export default function Cart(): JSX.Element {
  return (
    <main>
      <GlobalStateProvider>
        <Inner />
      </GlobalStateProvider>
    </main>
  )
}
