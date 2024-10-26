import { styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.green[700],
  size: 64,
}))``
