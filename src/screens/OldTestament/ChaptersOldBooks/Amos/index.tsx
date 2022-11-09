import React from 'react'
import { Container, ChappterWrapper } from './styles'

import { ButtonChapter } from '../../../../components/ButtonChapter'
import { Header } from '../../../../components/Header'
import { ScrollView } from 'react-native'

export function Amos() {
  return (
    <Container>
      <Header onPress={() => {}} title="Amós" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChappterWrapper>
          <ButtonChapter onPress={() => {}} title="1" />
          <ButtonChapter onPress={() => {}} title="2" />
          <ButtonChapter onPress={() => {}} title="3" />
          <ButtonChapter onPress={() => {}} title="4" />
          <ButtonChapter onPress={() => {}} title="5" />
          <ButtonChapter onPress={() => {}} title="6" />
          <ButtonChapter onPress={() => {}} title="7" />
          <ButtonChapter onPress={() => {}} title="8" />
          <ButtonChapter onPress={() => {}} title="9" />
        </ChappterWrapper>
      </ScrollView>
    </Container>
  )
}
