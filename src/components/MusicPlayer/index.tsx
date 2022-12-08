import React from 'react'
import { Header } from '../Header'
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
  ButtonCenter,
  ButtonBack
} from './styles'
import ImagePlayerMusic from '../../assets/ImagePatherMusicPlayer.png'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface Props extends TouchableOpacityProps {
  title: string
  onPressButtonBack: () => void
  onPressButtonPass: () => void
  onPressButtonCenter: () => void
  nameButtonCenter: string
}

export function MusicPlayer({
  title,
  onPressButtonBack,
  onPressButtonPass,
  onPressButtonCenter,
  nameButtonCenter
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
          <FirstTime>00:00</FirstTime>
          <FinalTime>00:00</FinalTime>
        </DurationSongsWrapper>
        <ButtonWrapper>
          <TouchableOpacity onPress={onPressButtonBack}>
            <ButtonBack name="stepbackward" />
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressButtonCenter}>
            <ButtonCenter name={nameButtonCenter} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressButtonPass}>
            <ButtonPass name="stepforward" />
          </TouchableOpacity>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  )
}
