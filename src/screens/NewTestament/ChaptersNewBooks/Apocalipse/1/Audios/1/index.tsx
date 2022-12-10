import React, { useState } from 'react'
import { Container, ChappterWrapper } from './styles'
import { useNavigation } from '@react-navigation/native'

import { Header } from '../../../../../../../components/Header'
import { MusicPlayer } from '../../../../../../../components/MusicPlayer'

import SoundPlayer from 'react-native-sound-player'

export function ApocalipseAudio1() {
  const [sound, setSound] = useState()

  const navigation = useNavigation()

  function handleGoback() {
    navigation.goBack()
  }

  function playSong() {
    try {
      SoundPlayer.playUrl(
        'https://storage.googleapis.com/rota66audio/rota66_001.mp3'
      )
    } catch (e) {
      console.log(`cannot play the sound file`, e)
    }
  }

  async function getInfo() {
    try {
      const info = await SoundPlayer.getInfo() // Also, you need to await this because it is async
      console.log('getInfo', info) // {duration: 12.416, currentTime: 7.691}
    } catch (e) {
      console.log('There is no song playing', e)
    }
  }

  function onPressPlayButton() {
    playSong()
    getInfo()
  }

function stop(){
  SoundPlayer.pause()
}

function con(){
  SoundPlayer.resume()
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
          onPressButtonCenter={onPressPlayButton}
          onPressButtonBack={con}
          onPressButtonPass={stop}
        />
      </ChappterWrapper>
    </Container>
  )
}
