import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, Button, Icon, Title } from './styles'

interface Props extends TouchableOpacityProps {
  title?: string
  onPress: () => void
}
export function Header({ title, onPress, ...rest }: Props) {
  return (
    <Container>
      <Button onPress={onPress} {...rest}>
        <Icon name="arrowleft" />
      </Button>

      <Title>{title}</Title>
    </Container>
  )
}
