import 'styled-components/native'
import type { defaultTheme } from '@/theme'

declare module 'styled-components/native' {
  type ThemeType = typeof defaultTheme

  export interface DefaultTheme extends ThemeType {}
}
