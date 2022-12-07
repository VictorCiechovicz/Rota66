import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import {
  Container,
  Image,
  ContentWrapper,
  Title,
  Duration,
  Icon
} from './styles'

import ImagePhater from '../../assets/ImagePatherMusicPlayer.png'

interface Props extends TouchableOpacityProps {
  title: String
  duration: String
   onPress: () => void
}

export function VerseItem({
  title,
  duration,
  onPress,
  ...rest
}: Props) {
  return (
    <Container>
      <Image source={ImagePhater} />

      <ContentWrapper>
        <Title>{title}</Title>
        <Duration>{duration} min</Duration>
      </ContentWrapper>

      <TouchableOpacity onPress={onPress} {...rest}>
        <Icon name="playlist-add" />
      </TouchableOpacity>
    </Container>
  )
}
