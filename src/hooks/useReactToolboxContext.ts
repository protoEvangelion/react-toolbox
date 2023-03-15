import { ProviderContext } from '@/components/ReactToolboxProvider/context'
import { useContext } from 'react'

export function useReactToolboxContext() {
  const context = useContext(ProviderContext)

  if (!context) {
    throw new Error(
      'Missing ReactToolbox context. Wrap your top component by <ReactToolboxProvider.Provider />.'
    )
  }

  return context
}
