import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useTheme } from 'styled-components'

import {
  Container,
  FormsWrapper,
  OuthersChanges,
  SingUp,
  ForgotPassword,
  Title,
  SocialLoginWrapper,
  AppleLogin,
  GoogleLogin
} from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import LogoRota66 from '../../assets/LogoRota66.svg'
import GoogleLogo from '../../assets/GoogleLogo.svg'
import AppleLogo from '../../assets/AppleLogo.svg'

export function SignIn() {

  const navigation = useNavigation()
  const theme = useTheme()


  function handleNewUser() {
    navigation.navigate('SignUp')
  }
  function forgotPassword() {
    navigation.navigate('ForgotPassword')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <LogoRota66
          width={RFValue(149)}
          height={RFValue(145)}
          style={{ marginTop: 50 }}
        />

        <FormsWrapper>
          <Input
            placeholder="E-mail"
            autoCorrect={false}
            placeholderTextColor={theme.colors.secundary}
          />
          <Input
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry
            placeholderTextColor={theme.colors.secundary}
          />
          <OuthersChanges>
            <SingUp onPress={handleNewUser} >
              <Title>Primeiro acesso</Title>
            </SingUp>

            <ForgotPassword onPress={forgotPassword}>
              <Title>Esqueceu a senha?</Title>
            </ForgotPassword>
          </OuthersChanges>

          <Button title="Entrar" onPress={() => {}} />
        </FormsWrapper>

        <Title>Ou continue com</Title>

        <SocialLoginWrapper>
          <AppleLogin>
            <AppleLogo width={RFValue(35)} height={RFValue(35)} />
          </AppleLogin>

          <GoogleLogin>
            <GoogleLogo width={RFValue(35)} height={RFValue(35)} />
          </GoogleLogin>
        </SocialLoginWrapper>
      </Container>
    </TouchableWithoutFeedback>
  )
}
