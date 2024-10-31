import { TextInput } from 'react-native'
import { css, styled } from 'styled-components/native'

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.gray[700]};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
  `}

  border-radius: 6px;
  padding: 16px;
`
