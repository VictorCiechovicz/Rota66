import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useTheme } from 'styled-components'

import {
  Container,
  FormsWrapper,
  OuthersChanges,
  SingOut,
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
  const theme = useTheme()
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
            <SingOut>
              <Title>Primeiro acesso</Title>
            </SingOut>

            <ForgotPassword>
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
