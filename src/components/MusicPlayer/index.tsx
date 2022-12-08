import React from 'react'
import { Header } from '../Header'

import {
  Container,
  ContentWrapper,
  Image,
  Title,
  ButtonWrapper,
  ButtonPass,
  ButtonPause,
  ButtonBack
} from './styles'
import ImagePlayerMusic from '../../assets/ImagePatherMusicPlayer.png'

export function MusicPlayer() {
  return (
    <Container>
      <Header onPress={() => {}} />

      <ContentWrapper>
        <Image source={ImagePlayerMusic} />
        <Title>Estudo 200 - 2 Crônicas 5-7</Title>
        <ButtonWrapper>
          <ButtonBack name="stepbackward" />
          <ButtonPause name="playcircleo" />
          <ButtonPass name="stepforward" />
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  )
}
