import React, { useState, useEffect } from 'react'
import { Container, ChappterWrapper } from './styles'
import { useNavigation } from '@react-navigation/native'

import { Header } from '../../../../../../../components/Header'
import { MusicPlayer } from '../../../../../../../components/MusicPlayer'

//import SoundPlayer from 'react-native-sound-player'

import SoundPlayer from 'react-native-sound'
import { useAudioHelper } from '../../../../../../../hooks/audio-helper'





export function ApocalipseAudio1() {
  const [controlButton, setControlButton] = useState(false)
  const [controlButtonPlay, setControlButtonPlay] = useState(false)
  const [currentTimeState, setCurrentTime] = useState()
  const [durationState, setDuration] = useState()

//=======================test=============

const player = useAudioHelper({
  listSounds: [
        { type: 'network', path: 'https://storage.googleapis.com/rota66audio/rota66_001.mp3', name: "Estudo 200 - Crônicas 1-6", },
  ],
  timeRate: 15
 
});

//=========================================

  const navigation = useNavigation()

  function handleGoback() {
    navigation.goBack()
  }
//
//function playSong() {
//  try {
//    SoundPlayer.playUrl(
//      'https://storage.googleapis.com/rota66audio/rota66_001.mp3'
//    )
//    setControlButton(true)
//    setControlButtonPlay(true)
//  } catch (e) {
//    console.log(`cannot play the sound file`, e)
//  }
//}
//
//function resumeSong() {
//  SoundPlayer.resume()
//  setControlButton(true)
//}
//
//function stopSong() {
//  SoundPlayer.pause()
//  setControlButton(false)
//}
//
//async function getInfo() {
//  try {
//    const { currentTime, duration } = await SoundPlayer.getInfo()
//    console.log('currentTime', currentTime)
//    console.log('duration', duration)
//  } catch (e) {
//    console.log('There is no song playing', e)
//  }
//}
//
//useEffect(() => {
//  getInfo()
//}, [playSong])

  return (
    <Container>
      <Header onPress={handleGoback} />

      <ChappterWrapper>
        <MusicPlayer
          title={player.currentAudioName}
          onPressButtonBack={player.decreaseTime}
          onPressButtonPass={player.increaseTime}

          onPressButtonPlay={player.play}
          onPressButtonPause={() => {}}
      

          
          currentTime={player.durationString}
          duration={player.duration}

         // onPressButtonPlay={!controlButtonPlay ? playSong : resumeSong}
         // onPressButtonPause={stopSong}
          controlButtonCenter={controlButton}
         // currentTime={currentTimeState}
         // duration={durationState}
        />
      </ChappterWrapper>
    </Container>
  )
}
