import React from 'react'
import { Container, ChappterWrapper } from './styles'
import { useNavigation } from '@react-navigation/native'

import { Header } from '../../../../../../../components/Header'
import { MusicPlayer } from '../../../../../../../components/MusicPlayer'

export function ApocalipseAudio1() {
  const navigation = useNavigation()

  function handleGoback() {
    navigation.goBack()
  }
  return (
    <Container>
      <Header onPress={handleGoback}/>

        <ChappterWrapper>
          <MusicPlayer
            title="Estudo 200 - Crônicas 1-6"
            nameButtonCenter="playcircleo"
            onPressButtonCenter={() => {}}
            onPressButtonBack={() => {}}
            onPressButtonPass={() => {}}
           
          />
        </ChappterWrapper>
 
    </Container>
  )
}
