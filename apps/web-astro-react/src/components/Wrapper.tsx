import { Test } from './Test'
import { GlobalStateProvider } from '../../../../packages/providers-react/src'

export const Wrapper = () => {
  return (
    <GlobalStateProvider>
      <Test />
    </GlobalStateProvider>
  )
}
