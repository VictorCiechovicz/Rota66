import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'
import { StatusBar } from 'expo-status-bar'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium
} from '@expo-google-fonts/roboto'

import { Loading } from './src/components/Loading'
import { Home} from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  )
}
