import React from 'react'
import { Container, ChappterWrapper } from './styles'

import { ButtonChapter } from '../../../../components/ButtonChapter'
import { Header } from '../../../../components/Header'
import { ScrollView } from 'react-native'

export function Timoteo1() {
  return (
    <Container>
      <Header onPress={() => {}} title="Timóteo I" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChappterWrapper>
          <ButtonChapter onPress={() => {}} title="1" />
          <ButtonChapter onPress={() => {}} title="2" />
          <ButtonChapter onPress={() => {}} title="3" />
          <ButtonChapter onPress={() => {}} title="4" />
          <ButtonChapter onPress={() => {}} title="5" />
          <ButtonChapter onPress={() => {}} title="6" />
        </ChappterWrapper>
      </ScrollView>
    </Container>
  )
}
