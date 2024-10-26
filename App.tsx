import { Groups } from '@/screens/Groups'
import { defaultTheme } from '@/theme'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { ActivityIndicator } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Groups />
    </ThemeProvider>
  )
}
