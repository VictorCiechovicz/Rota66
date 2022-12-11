import React, { useState } from 'react'
import { useAudioHelper } from '../../hooks/audio-helper'
import Slider from '@react-native-community/slider'
import { useTheme } from 'styled-components'

import {
  Container,
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
import ImagePlayerMusic from '../../assets/ImagePatherMusicPlayer.png'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface Props extends TouchableOpacityProps {
  title: string
  onPressButtonBack: () => void
  onPressButtonPass: () => void
  onPressButtonPlay: () => void
  onPressButtonPause: () => void
  controlButtonCenter: boolean
  currentTime: string
  duration: number
}

export function MusicPlayer({
  title,
  onPressButtonBack,
  onPressButtonPass,
  onPressButtonPlay,
  onPressButtonPause,
  controlButtonCenter = false,
  currentTime,
  duration
}: Props) {
  const theme = useTheme()

  return (
    <Container>
      <ContentWrapper>
        <Image source={ImagePlayerMusic} />
        <Title>{title}</Title>
        <SliderWrapper>
          <Slider
            style={{ width: 350 }}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor={theme.colors.title}
            minimumTrackTintColor={theme.colors.secundary}
            maximumTrackTintColor={theme.colors.secundary}
            onSlidingComplete={() => {}}
          />
        </SliderWrapper>

        <DurationSongsWrapper>
          <FirstTime>{currentTime}</FirstTime>
          <FinalTime>{duration}</FinalTime>
        </DurationSongsWrapper>
        <ButtonWrapper>
          <TouchableOpacity onPress={onPressButtonBack}>
            <ButtonBack name="stepbackward" />
          </TouchableOpacity>

          {controlButtonCenter ? (
            <TouchableOpacity onPress={onPressButtonPause}>
              <ButtonPause name="pause-circle" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onPressButtonPlay}>
              <ButtonPlay name="playcircleo" />
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={onPressButtonPass}>
            <ButtonPass name="stepforward" />
          </TouchableOpacity>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  )
}
