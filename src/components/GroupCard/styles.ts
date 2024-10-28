import { UsersThree } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 96px;

  background-color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  gap: 20px;

  padding: 32px 24px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme }) => theme.colors.gray[200]};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.green[700],
  weight: 'fill',
}))``