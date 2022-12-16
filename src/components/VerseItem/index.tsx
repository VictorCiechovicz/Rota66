import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import {
  Container,
  Image,
  ContentWrapper,
  ContentFootWrapper,
  Title,
  Duration,
  Icon
} from './styles'

import ImagePhater from '../../assets/ImagePatherMusicPlayer.png'

export type Props = TouchableOpacityProps & {
  title: String
  duration: String
  onPressContent: () => void
  onPressAddPlayList: () => void
}

export function VerseItem({
  title,
  duration,
  onPressAddPlayList,
  onPressContent,
  ...rest
}: Props) {
  return (
    <Container>
      <ContentWrapper onPress={onPressContent} {...rest}>
        <Image source={ImagePhater} />

        <ContentFootWrapper>
          <Title>{title}</Title>
          <Duration>{duration} min</Duration>
        </ContentFootWrapper>
      </ContentWrapper>

      <TouchableOpacity onPress={onPressAddPlayList} {...rest}>
        <Icon name="playlist-add" />
      </TouchableOpacity>
    </Container>
  )
}
