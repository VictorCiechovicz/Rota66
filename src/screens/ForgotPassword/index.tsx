import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

import { Container, FormsWrapper, GoBack, HeaderWrapper, Icon } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import LogoRota66 from '../../assets/LogoRota66.svg'
import { useTheme } from 'styled-components'

export function ForgotPassword() {
  const theme = useTheme()
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <HeaderWrapper>
          <GoBack>
            <Icon name="arrowleft" />
          </GoBack>

          <LogoRota66 width={RFValue(149)} height={RFValue(145)} />
        </HeaderWrapper>

        <FormsWrapper>
          <Input
            placeholder="E-mail"
            autoCorrect={false}
            placeholderTextColor={theme.colors.secundary}
          />

          <Button title="Enviar" onPress={() => {}} style={{ marginTop: 60 }} />
        </FormsWrapper>
      </Container>
    </TouchableWithoutFeedback>
  )
}
