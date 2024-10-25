import { Groups } from '@/screens/Groups'
import { defaultTheme } from '@/theme'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Groups />
    </ThemeProvider>
  )
}
