import React from 'react'

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



export function Home() {
  return (
    <Container>
      <Header>
        <Search 
        placeholder='Serch...'
        autoCorrect={false}
       
        />

        <TestamentWrapper>
          <OldTestament source={BackgroundBible}>
            <TitleTestament>Antigo Testamento</TitleTestament>
          </OldTestament>

          <NewTestament source={BackgroundBible}>
            <TitleTestament>Antigo Testamento</TitleTestament>
          </NewTestament>
        </TestamentWrapper>
      </Header>

      <Content>
        <ButtonSubject title="Casamento" onPress={() => {}} />
        <ButtonSubject title="Familia" onPress={() => {}} />
        <ButtonSubject title="Natal" onPress={() => {}} />
        <ButtonSubject title="Filhos" onPress={() => {}} />
        <ButtonSubject title="Pais" onPress={() => {}} />
        <ButtonSubject title="Casamento" onPress={() => {}} />
        <ButtonSubject title="Familia" onPress={() => {}} />
        <ButtonSubject title="Natal" onPress={() => {}} />
        <ButtonSubject title="Filhos" onPress={() => {}} />
      </Content>
    </Container>
  )
}
