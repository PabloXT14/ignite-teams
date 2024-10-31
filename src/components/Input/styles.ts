import { TextInput } from 'react-native'
import { styled } from 'styled-components/native'

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray[700]};

  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.md}px;

  border-radius: 6px;
  padding: 16px;
`
