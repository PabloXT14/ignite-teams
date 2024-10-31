import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { defaultTheme } from '@/theme'
import { Loading } from '@/components/Loading'
import { Groups } from '@/screens/Groups'
import { NewGroup } from '@/screens/NewGroup'
import { Players } from '@/screens/Players'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  )
}
