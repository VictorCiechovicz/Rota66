import React from 'react'

import { Container, Logo, InputsWrapper } from './styles'
import LogoRota66 from '../../assets/LogoRota66.png'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  return (
    <Container>

      <Logo source={LogoRota66} />

      <InputsWrapper>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <Button
      title="Entrar"
      onPress={()=>{}}
      />
      </InputsWrapper>

     
    </Container>
  )
}
