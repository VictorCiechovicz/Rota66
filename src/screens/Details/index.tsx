import React, { useState, useEffect } from 'react'
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native'
import {
  Container,
  ChappterWrapper,
  ContentWrapper,
  Image,
  Title,
  SliderWrapper,
  DurationSongsWrapper,
  FirstTime,
  FinalTime,
  ButtonWrapper,
  ButtonPass,
  ButtonPlay,
  ButtonPause,
  ButtonBack
} from './styles'

import firestore from '@react-native-firebase/firestore'
import { Header } from '../../components/Header'

import { useAudioHelper } from '../../hooks/audio-helper'

import ImagePlayerMusic from '../../assets/ImagePatherMusicPlayer.png'
import Slider from '@react-native-community/slider'
import { useTheme } from 'styled-components'
import { TouchableOpacity } from 'react-native'
import { AudioProps } from '../../components/VerseItem'
import { Loading } from '../../components/Loading'
import { AudioFirestoreDTO } from '../../@types/DTOs/AudioDTO'

type RouteParams = {
  audiosId: string
}

export function Details() {
  const [isLoading, setIsLoading] = useState(true)
  const [controlButton, setControlButton] = useState(false)
  const [audio, setAudio] = useState<AudioProps>({} as AudioProps)
  

  const route = useRoute()
  const { audiosId } = route.params as RouteParams
  const navigation = useNavigation()
  const theme = useTheme()

  function handleGoback() {
    navigation.goBack()
  }

  useEffect(() => {
    firestore()
      .collection<AudioFirestoreDTO>('audios')
      .doc(audiosId)
      .get()
      .then(doc => {
        const {
          titulo,
          capitulo,
          descricao,
          livro,
          time,
          url,
          playlist,
          tema
        } = doc.data()

        setAudio({
          id: doc.id,
          titulo,
          capitulo,
          descricao,
          livro,
          time,
          url,
          playlist,
          tema
        })

        setIsLoading(false)
      })
  }, [])

  const player = useAudioHelper({
    listSounds: [
      {
        type: 'network',
        path: { audio.url},
        name: { audio.titulo }
      }
    ],
    timeRate: 15
  })

  useEffect(() => {
    player.status === 'play' ? setControlButton(true) : setControlButton(false)
  }, [player.status])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Header onPress={handleGoback} />

      <ChappterWrapper>
        <ContentWrapper>
          <Image source={ImagePlayerMusic} />
          <Title>{player.currentAudioName}</Title>
          <SliderWrapper>
            <Slider
              style={{ width: 350 }}
              minimumValue={0}
              maximumValue={player.duration}
              value={player.currentTime}
              thumbTintColor={theme.colors.title}
              minimumTrackTintColor={theme.colors.secundary}
              maximumTrackTintColor={theme.colors.secundary}
              onTouchStart={player.pause}
              onTouchEnd={player.play}
              onSlidingComplete={seconds => player.seekToTime(seconds)}
            />
          </SliderWrapper>

          <DurationSongsWrapper>
            <FirstTime>{player.currentTimeString}</FirstTime>
            <FinalTime>{player.durationString}</FinalTime>
          </DurationSongsWrapper>
          <ButtonWrapper>
            <TouchableOpacity onPress={player.decreaseTime}>
              <ButtonBack name="rotate-ccw" />
            </TouchableOpacity>

            {controlButton ? (
              <TouchableOpacity onPress={player.pause}>
                <ButtonPause name="pause-circle" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={player.play}>
                <ButtonPlay name="playcircleo" />
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={player.increaseTime}>
              <ButtonPass name="rotate-cw" />
            </TouchableOpacity>
          </ButtonWrapper>
        </ContentWrapper>
      </ChappterWrapper>
    </Container>
  )
}
