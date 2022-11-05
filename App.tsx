import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium
} from '@expo-google-fonts/roboto'

import { Loading } from './src/components/Loading'
import { SignIn } from './src/screens/SignIn'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <SignIn /> : <Loading />}
    </ThemeProvider>
  )
}
