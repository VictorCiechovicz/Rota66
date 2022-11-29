import React from 'react'
import { useTheme } from 'styled-components'
import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native'
import { ButtonSetings } from '../../components/ButtonSetings'

import { Container, ButtonsWrapper, Header, Title } from './styles'
import { AntDesign, Entypo, Feather } from '@expo/vector-icons'

export function Setings() {
  const theme = useTheme()

  function handleLogout() {
    auth()
      .signOut()
      .catch(error => {
        console.log(error)
        return Alert.alert('Sair', 'Não foi possível sair.')
      })
  }

  return (
    <Container>
      <Header>
        <Title>Configurações</Title>
      </Header>
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
          onPress={handleLogout}
          title="Sair"
          nameIcon={
            <Feather name="log-out" size={24} color={theme.colors.shape} />
          }
        />
      </ButtonsWrapper>
    </Container>
  )
}
