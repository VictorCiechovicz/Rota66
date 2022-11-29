import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import { Container, FormsWrapper, GoBack, HeaderWrapper, Icon } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import LogoRota66 from '../../assets/LogoRota66.svg'
import { useTheme } from 'styled-components'

export function ForgotPassword() {
  const [email, setEmail] = useState('')
  const theme = useTheme()
  const navigation = useNavigation()

  function handleGoback() {
    navigation.goBack()
  }
  async function forgotPassword() {
    if (!email) {
      return Alert.alert('Redefinir Senha', 'Informe o e-mail.')
    }

    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          'Redefinir Senha',
          'Enviamos um link no seu E-mail para você redefinir sua senha.'
        )
        navigation.goBack()
      })
      .catch(() =>
        Alert.alert(
          'Redefinir Senha',
          'Não foi possível enviar o e-mail para redefinição da senha.'
        )
      )
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <HeaderWrapper>
          <GoBack onPress={handleGoback}>
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

          <Button
            title="Enviar"
            onPress={forgotPassword}
            style={{ marginTop: 60 }}
          />
        </FormsWrapper>
      </Container>
    </TouchableWithoutFeedback>
  )
}
