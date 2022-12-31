import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { Container, Image, ContentFootWrapper, Title, Duration } from './styles'

import ImagePhater from '../../assets/ImagePatherMusicPlayer.png'
import { AudioFirestoreDTO } from '../../@types/DTOs/AudioDTO'

export type AudioProps = AudioFirestoreDTO & {
  id: string
  titulo: String
  time: String
  capitulo: string
  livro: string
  descricao: string
  playlist?: string
  tema?: string
  url: string
}

type Props = TouchableOpacityProps & {
  data: AudioProps
}

export function VerseItem({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Image source={ImagePhater} />

      <ContentFootWrapper>
        <Title>{data.titulo}</Title>
        <Duration>{data.time} min</Duration>
      </ContentFootWrapper>
    </Container>
  )
}
