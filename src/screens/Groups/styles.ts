import { styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: #fafafa;
  font-size: 24px;
  font-weight: bold;
`
