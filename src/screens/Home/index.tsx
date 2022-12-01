import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Header,
  Search,
  TestamentWrapper,
  OldTestament,
  TitleTestament,
  NewTestament,
  Content
} from './styles'

import { ButtonSubject } from '../../components/ButtonSubject'

import BackgroundBible from '../../assets/BackgroundBible.png'
import { TouchableOpacity } from 'react-native'

export function Home() {
  const navigation = useNavigation()

  function handleOpenNewTestament() {
    navigation.navigate('NewTestament')
  }
  function handleOpenOldTestament() {
    navigation.navigate('OldTestament')
  }

  useEffect(() => {
    const user = auth().currentUser
    user.providerData.forEach(userInfo => {
      console.log(userInfo)
    })
  }, [])

  return (
    <Container>
      <Header>
        <Search placeholder="Serch..." autoCorrect={false} />

        <TestamentWrapper>
          <TouchableOpacity onPress={handleOpenOldTestament}>
            <OldTestament source={BackgroundBible}>
              <TitleTestament>Antigo Testamento</TitleTestament>
            </OldTestament>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleOpenNewTestament}>
            <NewTestament source={BackgroundBible}>
              <TitleTestament>Novo Testamento</TitleTestament>
            </NewTestament>
          </TouchableOpacity>
        </TestamentWrapper>
      </Header>

      <Content>
        <ButtonSubject title="Casamento" onPress={() => {}} />
        <ButtonSubject title="Familia" onPress={() => {}} />
        <ButtonSubject title="Natal" onPress={() => {}} />
        <ButtonSubject title="Filhos" onPress={() => {}} />
        <ButtonSubject title="Pais" onPress={() => {}} />
        <ButtonSubject title="Casamento" onPress={() => {}} />
      </Content>
    </Container>
  )
}
