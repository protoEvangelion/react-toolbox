import { useLogger } from '@/hooks/useLogger'
import { forwardProps } from '@/libs/forwardProps'
import { IForwardedProps, ReactHTMLAttributes } from '@/libs/forwardProps/types'
import { usePortalPlaceHolder } from './usePortal'

interface IPortalPlaceHolderProps<TPlaceHolderName>
  extends IForwardedProps<ReactHTMLAttributes<HTMLDivElement>> {
  name: TPlaceHolderName
  debug?: boolean
}

export function PortalPlaceHolder<TPlaceHolderName>(
  props: IPortalPlaceHolderProps<TPlaceHolderName>
) {
  const { portalUid } = usePortalPlaceHolder(props.name)

  const logger = useLogger().newLogger('ReactToolBox')(
    'components/PortalPlaceHolder'
  )

  if (props.debug) {
    logger('debug')(
      `[PortalPlaceHolder] Render a new placeholder with id "${portalUid}"`
    )
  }

  return (
    <div
      data-attr-name={`PortalPlaceHolder-${props.name}`}
      id={portalUid}
      {...forwardProps(props)}
    />
  )
}
