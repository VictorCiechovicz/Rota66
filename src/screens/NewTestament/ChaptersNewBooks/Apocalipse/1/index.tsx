import React from 'react'
import { Container, ChappterWrapper } from './styles'
import { useNavigation } from '@react-navigation/native'

import { ButtonChapter } from '../../../../../components/ButtonChapter'
import { Header } from '../../../../../components/Header'
import { ScrollView } from 'react-native'
import { VerseItem } from '../../../../../components/VerseItem'

export function Apocalipse1() {
  const navigation = useNavigation()

  function handleOpenAudio() {
    navigation.navigate('ApocalipseAudio1')
  }

  function handleGoback() {
    navigation.goBack()
  }
 


  return (
    <Container>
      <Header onPress={handleGoback} title="Apocalipse-1" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChappterWrapper>
          <VerseItem
            title="Estudo 200 - Crônicas 1-6"
            duration="45"
            onPressContent={handleOpenAudio}
            onPressAddPlayList={() => {}}
          />
        </ChappterWrapper>
      </ScrollView>
    </Container>
  )
}
