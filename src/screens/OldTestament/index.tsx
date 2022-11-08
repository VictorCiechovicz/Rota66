import React from 'react'
import { ScrollView } from 'react-native'
import { ButtonOptionsBooks } from '../../components/ButtonOptionsBooks'
import { Header } from '../../components/Header'
import { Container, ButtonsWrapper } from './styles'

export function OldTestament() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header onPress={() => {}}  />

        <ButtonsWrapper>
          <ButtonOptionsBooks onPress={() => {}} title="Gêneses" />
          <ButtonOptionsBooks onPress={() => {}} title="Êxodo" />
          <ButtonOptionsBooks onPress={() => {}} title="Levítico" />
          <ButtonOptionsBooks onPress={() => {}} title="Números" />
          <ButtonOptionsBooks onPress={() => {}} title="Deuteronômio" />
          <ButtonOptionsBooks onPress={() => {}} title="Josué" />
          <ButtonOptionsBooks onPress={() => {}} title="Juízes" />
          <ButtonOptionsBooks onPress={() => {}} title="Rute" />
          <ButtonOptionsBooks onPress={() => {}} title="Samuel I" />
          <ButtonOptionsBooks onPress={() => {}} title="Samuel II" />
          <ButtonOptionsBooks onPress={() => {}} title="Reis I" />
          <ButtonOptionsBooks onPress={() => {}} title="Reis II" />
          <ButtonOptionsBooks onPress={() => {}} title="Crônicas I" />
          <ButtonOptionsBooks onPress={() => {}} title="Crônicas II" />
          <ButtonOptionsBooks onPress={() => {}} title="Esdras" />
          <ButtonOptionsBooks onPress={() => {}} title="Neemias" />
          <ButtonOptionsBooks onPress={() => {}} title="Ester" />
          <ButtonOptionsBooks onPress={() => {}} title="Jó" />
          <ButtonOptionsBooks onPress={() => {}} title="Salmos" />
          <ButtonOptionsBooks onPress={() => {}} title="Provérbios" />
          <ButtonOptionsBooks onPress={() => {}} title="Eclesiastes" />
          <ButtonOptionsBooks onPress={() => {}} title="Cantares" />
          <ButtonOptionsBooks onPress={() => {}} title="Isaías" />
          <ButtonOptionsBooks onPress={() => {}} title="Jeremias" />
          <ButtonOptionsBooks onPress={() => {}} title="Lamentações" />
          <ButtonOptionsBooks onPress={() => {}} title="Ezequiel" />
          <ButtonOptionsBooks onPress={() => {}} title="Daniel" />
          <ButtonOptionsBooks onPress={() => {}} title="Oseias" />
          <ButtonOptionsBooks onPress={() => {}} title="Joel" />
          <ButtonOptionsBooks onPress={() => {}} title="Amós" />
          <ButtonOptionsBooks onPress={() => {}} title="Obadias" />
          <ButtonOptionsBooks onPress={() => {}} title="Jonas" />
          <ButtonOptionsBooks onPress={() => {}} title="Miqueias" />
          <ButtonOptionsBooks onPress={() => {}} title="Naum" />
          <ButtonOptionsBooks onPress={() => {}} title="Habacuque" />
          <ButtonOptionsBooks onPress={() => {}} title="Sofonias" />
          <ButtonOptionsBooks onPress={() => {}} title="Ageu" />
          <ButtonOptionsBooks onPress={() => {}} title="Zacarias" />
          <ButtonOptionsBooks onPress={() => {}} title="Malaquias" />
        </ButtonsWrapper>
      </ScrollView>
    </Container>
  )
}
