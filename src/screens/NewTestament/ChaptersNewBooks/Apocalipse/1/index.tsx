import React from 'react'
import { Container, ChappterWrapper } from './styles'
import { useNavigation } from '@react-navigation/native'

import { ButtonChapter } from '../../../../../components/ButtonChapter'
import { Header } from '../../../../../components/Header'
import { ScrollView } from 'react-native'
import { VerseItem } from '../../../../../components/VerseItem'

export function Apocalipse1() {
  const navigation = useNavigation()

  function handleGoback() {
    navigation.goBack()
  }
  return (
    <Container>
      <Header onPress={handleGoback} title="Apocalipse-1" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChappterWrapper>
          <VerseItem title="Esutdo de teste" duration="45" onPress={() => {}} />
        </ChappterWrapper>
      </ScrollView>
    </Container>
  )
}
