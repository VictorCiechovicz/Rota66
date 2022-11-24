import React from 'react'
import { useTheme } from 'styled-components'
import { ButtonSetings } from '../../components/ButtonSetings'
import { Header } from '../../components/Header'

import { Container, ButtonsWrapper } from './styles'
import { FontAwesome5, AntDesign, Entypo, Feather } from '@expo/vector-icons'

export function Setings() {
  const theme = useTheme()

  return (
    <Container>
      <Header title="Configuracoes" onPress={() => {}} />
      <ButtonsWrapper>
        <ButtonSetings
          onPress={() => {}}
          title="Download"
          nameIcon={
            <AntDesign name="download" size={24} color={theme.colors.shape} />
          }
        />
        <ButtonSetings
          onPress={() => {}}
          title="Idiomas"
          nameIcon={
            <Entypo name="globe" size={24} color={theme.colors.shape} />
          }
        />
        <ButtonSetings
          onPress={() => {}}
          title="Sair"
          nameIcon={
            <Feather name="log-out" size={24} color={theme.colors.shape} />
          }
        />
      </ButtonsWrapper>
    </Container>
  )
}
