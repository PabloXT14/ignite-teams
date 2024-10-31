import type { TouchableOpacityProps } from 'react-native'
import { Container, Icon } from './styles'

type ButtonIconProps = TouchableOpacityProps & {}

export function ButtonIcon() {
  return (
    <Container>
      <Icon name="home" type="primary" />
    </Container>
  )
}
