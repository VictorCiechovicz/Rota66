import React from 'react'
import { Container, ChappterWrapper } from './styles'

import { ButtonChapter } from '../../../../components/ButtonChapter'
import { Header } from '../../../../components/Header'
import { ScrollView } from 'react-native'

export function Apocalipse() {
  return (
    <Container>
      <Header onPress={() => {}} title="Apocalipse" />
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
          <ButtonChapter onPress={() => {}} title="14" />
          <ButtonChapter onPress={() => {}} title="15" />
          <ButtonChapter onPress={() => {}} title="16" />
          <ButtonChapter onPress={() => {}} title="17" />
          <ButtonChapter onPress={() => {}} title="18" />
          <ButtonChapter onPress={() => {}} title="19" />
          <ButtonChapter onPress={() => {}} title="20" />
          <ButtonChapter onPress={() => {}} title="21" />
          <ButtonChapter onPress={() => {}} title="22" />
        </ChappterWrapper>
      </ScrollView>
    </Container>
  )
}
