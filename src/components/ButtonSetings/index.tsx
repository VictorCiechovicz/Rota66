import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Title, Icon } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  nameIcon?: any
  onPress: () => void
}

export function ButtonSetings({ title, nameIcon, onPress, ...rest }: Props) {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
      <Icon>{nameIcon}</Icon>
    </Container>
  )
}
