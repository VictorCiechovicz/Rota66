import React, { useState } from 'react'
import { Container, ChappterWrapper } from './styles'
import { useNavigation } from '@react-navigation/native'

import { Header } from '../../../../../../../components/Header'
import { MusicPlayer } from '../../../../../../../components/MusicPlayer'




export function ApocalipseAudio1() {
  const [sound, setSound] = useState()

  const navigation = useNavigation()

 
  function handleGoback() {
    navigation.goBack()
  }


  const songs = [
    {
      id: 1,
      title: 'Estudo 200 - Crônicas 1-5',
      url: 'https://storage.googleapis.com/rota66audio/rota66_001.mp3'
    },
    {
      id: 2,
      title: 'Estudo 200 - Crônicas 2-5',
      url: 'https://storage.googleapis.com/rota66audio/rota66_002.mp3'
    },
    {
      id: 3,
      title: 'Estudo 200 - Crônicas 3-5',
      url: 'https://storage.googleapis.com/rota66audio/rota66_003.mp3'
    },
    {
      id: 4,
      title: 'Estudo 200 - Crônicas 4-5',
      url: 'https://storage.googleapis.com/rota66audio/rota66_004.mp3'
    },
    {
      id: 5,
      title: 'Estudo 200 - Crônicas 5-5',
      url: 'https://storage.googleapis.com/rota66audio/rota66_005.mp3'
    }
  ]
  
 
 

  return (
    <Container>
      <Header onPress={handleGoback} />

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
