import type { TouchableOpacityProps } from 'react-native'
import { Title, type ButtonTypeStyleProps, Container } from './styles'

type ButtonProps = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'primary', ...rest }: ButtonProps) {
  return (
    <Container type={type} activeOpacity={0.7} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
