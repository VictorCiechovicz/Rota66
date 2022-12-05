import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import { ButtonOptionsBooks } from '../../components/ButtonOptionsBooks'
import { Header } from '../../components/Header'
import { Container, ButtonsWrapper } from './styles'

export function NewTestament() {
  const navigation = useNavigation()

  function handleGoback() {
    navigation.goBack()
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header onPress={handleGoback} />

        <ButtonsWrapper>
          <ButtonOptionsBooks onPress={() => {}} title="Mateus" />
          <ButtonOptionsBooks onPress={() => {}} title="Marcos" />
          <ButtonOptionsBooks onPress={() => {}} title="Lucas" />
          <ButtonOptionsBooks onPress={() => {}} title="João" />
          <ButtonOptionsBooks onPress={() => {}} title="Atos.Apóstolos" />
          <ButtonOptionsBooks onPress={() => {}} title="Romanos" />
          <ButtonOptionsBooks onPress={() => {}} title="Coríntios I" />
          <ButtonOptionsBooks onPress={() => {}} title="Coríntios II" />
          <ButtonOptionsBooks onPress={() => {}} title="Gálatas" />
          <ButtonOptionsBooks onPress={() => {}} title="Efésios" />
          <ButtonOptionsBooks onPress={() => {}} title="Filipenses" />
          <ButtonOptionsBooks onPress={() => {}} title="Colossenses" />
          <ButtonOptionsBooks onPress={() => {}} title="Tessalonicen.I" />
          <ButtonOptionsBooks onPress={() => {}} title="Tessalonicen.II" />
          <ButtonOptionsBooks onPress={() => {}} title="Timóteo I" />
          <ButtonOptionsBooks onPress={() => {}} title="Timóteo II" />
          <ButtonOptionsBooks onPress={() => {}} title="Tito" />
          <ButtonOptionsBooks onPress={() => {}} title="Filemom" />
          <ButtonOptionsBooks onPress={() => {}} title="Hebreus" />
          <ButtonOptionsBooks onPress={() => {}} title="Tiago" />
          <ButtonOptionsBooks onPress={() => {}} title="Pedro I" />
          <ButtonOptionsBooks onPress={() => {}} title="Pedro II" />
          <ButtonOptionsBooks onPress={() => {}} title="João I" />
          <ButtonOptionsBooks onPress={() => {}} title="João II" />
          <ButtonOptionsBooks onPress={() => {}} title="João III" />
          <ButtonOptionsBooks onPress={() => {}} title="Judas" />
          <ButtonOptionsBooks
            onPress={() => {
              navigation.navigate('Apocalipse')
            }}
            title="Apocalipse"
          />
        </ButtonsWrapper>
      </ScrollView>
    </Container>
  )
}
