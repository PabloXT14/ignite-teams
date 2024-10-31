import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styled } from 'styled-components/native'

export type ButtonIconStyleProps = 'primary' | 'secondary'

type IconProps = {
  type: ButtonIconStyleProps
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'primary' ? theme.colors.green[700] : theme.colors.red[400],
  })
)``
