import React from 'react'
import { Container, ChappterWrapper } from './styles'

import { ButtonChapter } from '../../../../components/ButtonChapter'
import { Header } from '../../../../components/Header'
import { ScrollView } from 'react-native'

export function Judas() {
  return (
    <Container>
      <Header onPress={() => {}} title="Judas" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChappterWrapper>
          <ButtonChapter onPress={() => {}} title="1" />
        </ChappterWrapper>
      </ScrollView>
    </Container>
  )
}
