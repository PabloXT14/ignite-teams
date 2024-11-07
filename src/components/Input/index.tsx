import type { RefObject } from 'react'
import type { TextInput, TextInputProps } from 'react-native'

import { Container } from './styles'
import { useTheme } from 'styled-components/native'

type InputProps = TextInputProps & {
  inputRef?: RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {
  const { colors } = useTheme()

  return (
    <Container
      ref={inputRef}
      placeholderTextColor={colors.gray[300]}
      {...rest}
    />
  )
}
