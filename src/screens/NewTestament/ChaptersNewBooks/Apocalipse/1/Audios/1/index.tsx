import React, { useState } from 'react'
import { Container, ChappterWrapper } from './styles'
import { useNavigation } from '@react-navigation/native'

import { Header } from '../../../../../../../components/Header'
import { MusicPlayer } from '../../../../../../../components/MusicPlayer'

import {Audio} from 'expo-av';


export function ApocalipseAudio1() {
  const [sound, setSound] = useState()

  const navigation = useNavigation()

 
  function handleGoback() {
    navigation.goBack()
  }


  async function  playSound() {
   await Audio.Sound.createAsync(
      {uri:'https://storage.googleapis.com/rota66audio/rota66_001.mp3'},
      {shouldPlay:true}
    )
  }

 

  return (
    <Container>
      <Header onPress={handleGoback} />

      <ChappterWrapper>
        <MusicPlayer
          title="Estudo 200 - Crônicas 1-6"
          nameButtonCenter="playcircleo"
          onPressButtonCenter={playSound}
          onPressButtonBack={() => {}}
          onPressButtonPass={() => {}}
        />
      </ChappterWrapper>
    </Container>
  )
}
