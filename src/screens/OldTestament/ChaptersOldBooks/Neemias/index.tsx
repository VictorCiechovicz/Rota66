import React from 'react'
import { Container, ChappterWrapper } from './styles'

import { ButtonChapter } from '../../../../components/ButtonChapter'
import { Header } from '../../../../components/Header'
import { ScrollView } from 'react-native'

export function Neemias() {
  return (
    <Container>
      <Header onPress={() => {}} title="Neemias" />
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
          <ButtonChapter onPress={() => {}} title="10" />
          <ButtonChapter onPress={() => {}} title="11" />
          <ButtonChapter onPress={() => {}} title="12" />
          <ButtonChapter onPress={() => {}} title="13" />
        </ChappterWrapper>
      </ScrollView>
    </Container>
  )
}
