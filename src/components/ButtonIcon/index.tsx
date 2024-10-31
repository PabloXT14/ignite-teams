import type { TouchableOpacityProps } from 'react-native'
import type { MaterialIcons } from '@expo/vector-icons'

import { Container, Icon, type ButtonIconStyleProps } from './styles'

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconStyleProps
}

export function ButtonIcon({
  icon,
  type = 'primary',
  ...rest
}: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}
