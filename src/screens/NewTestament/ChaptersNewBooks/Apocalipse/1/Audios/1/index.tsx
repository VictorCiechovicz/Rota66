import React, { useState, useEffect } from 'react'
import { Container, ChappterWrapper } from './styles'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import { Header } from '../../../../../../../components/Header'
import { MusicPlayer } from '../../../../../../../components/MusicPlayer'

import { useAudioHelper } from '../../../../../../../hooks/audio-helper'

import { Loading } from '../../../../../../../components/Loading'

export function ApocalipseAudio1() {
  const [isLoading, setIsLoading] = useState(true)
  const [controlButton, setControlButton] = useState(false)

  const player = useAudioHelper({
    listSounds: [
      {
        type: 'network',
        path: 'https://storage.googleapis.com/rota66audio/rota66_001.mp3',
        name: 'Estudo 200 - Crônicas 1-6'
      }
    ],
    timeRate: 15
  })

  const navigation = useNavigation()
  const estaNaTela = useIsFocused()

  function handleGoback() {
    navigation.goBack()
  }

  useEffect(() => {
    player.status === 'play' ? setControlButton(true) : setControlButton(false)
  }, [player.status])

  
  return (
    <Container>
      <Header onPress={handleGoback} />

      <ChappterWrapper>
        <MusicPlayer
          title={player.currentAudioName}
          currentTime={player.currentTimeString}
          duration={player.durationString}
          onPressButtonBack={player.decreaseTime}
          onPressButtonPass={player.increaseTime}
          onPressButtonPlay={player.play}
          onPressButtonPause={player.pause}
          controlButtonCenter={controlButton}
          maximumValueSlider={player.duration}
          valueSlider={player.currentTime}
          onTouchStartSlider={player.pause}
          onTouchEndSlider={player.play}
          onSlidingCompleteSlider={seconds => player.seekToTime(seconds)}
        />
      </ChappterWrapper>
    </Container>
  )
}
