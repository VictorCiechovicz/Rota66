import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

import {
  Container,
  FormsWrapper,
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

export function SignUp() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <LogoRota66
          width={RFValue(100)}
          height={RFValue(100)}
          style={{ marginTop: 50 }}
        />

        <FormsWrapper>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            placeholderTextColor={'#FBB03F'}
          />
          <Input
            placeholder="E-mail"
            autoCorrect={false}
            placeholderTextColor={'#FBB03F'}
          />
          <Input
            placeholder="Data de Nascimento"
            dataDetectorTypes={'calendarEvent'}
            autoCorrect={false}
            placeholderTextColor={'#FBB03F'}
          />
          <Input
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry
            placeholderTextColor={'#FBB03F'}
          />
          <Input
            placeholder="Confirmar Senha"
            autoCorrect={false}
            secureTextEntry
            placeholderTextColor={'#FBB03F'}
          />

          <Button
            title="Salvar"
            onPress={() => {}}
            style={{ marginTop: 6 }}
          />
        </FormsWrapper>

        <Title>Ou realizar login com</Title>

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
