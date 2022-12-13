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
  ButtonBack,
  

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
  duration: string
  maximumValueSlider: number
  valueSlider: number
  onTouchStartSlider: () => void
  onTouchEndSlider: () => void
  onSlidingCompleteSlider: (seconds) => void
}

export function MusicPlayer({
  title,
  onPressButtonBack,
  onPressButtonPass,
  onPressButtonPlay,
  onPressButtonPause,
  controlButtonCenter = false,
  currentTime,
  duration,
  maximumValueSlider,
  valueSlider,
  onTouchStartSlider,
  onTouchEndSlider,
  onSlidingCompleteSlider
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
            minimumValue={0}
            maximumValue={maximumValueSlider}
            value={valueSlider}
            thumbTintColor={theme.colors.title}
            minimumTrackTintColor={theme.colors.secundary}
            maximumTrackTintColor={theme.colors.secundary}
            onTouchStart={onTouchStartSlider}
            onTouchEnd={onTouchEndSlider}
            onSlidingComplete={onSlidingCompleteSlider}
          />
        </SliderWrapper>

        <DurationSongsWrapper>
          <FirstTime>{currentTime}</FirstTime>
          <FinalTime>{duration}</FinalTime>
        </DurationSongsWrapper>
        <ButtonWrapper>
          <TouchableOpacity onPress={onPressButtonBack}>
            <ButtonBack name="rotate-ccw" />
         
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

          <TouchableOpacity onPress={onPressButtonPass} >
            <ButtonPass name="rotate-cw" />
           
          </TouchableOpacity>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  )
}
