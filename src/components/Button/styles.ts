import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native'

export type ButtonTypeStyleProps = 'primary' | 'secondary'

type ButtonProps = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) => (type === 'primary' ? theme.colors.green[700] : theme.colors.red[700])};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.bold};
`
