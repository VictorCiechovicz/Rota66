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

interface Props extends TouchableOpacityProps {
  title: String
  duration: String
  source: any
  onPress: () => void
}

export function PlayListItem({
  title,
  duration,
  source,
  onPress,
  ...rest
}: Props) {
  return (
    <Container>
      <Image source={{ uri: source }} />

      <ContentWrapper>
        <Title>{title}</Title>
        <Duration>{duration} min</Duration>
      </ContentWrapper>

      <TouchableOpacity onPress={onPress} {...rest}>
        <Icon name="trash" />
      </TouchableOpacity>
    </Container>
  )
}
