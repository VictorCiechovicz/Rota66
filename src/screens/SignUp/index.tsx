import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useTheme } from 'styled-components'

import {
  Container,
  HeaderWrapper,
  GoBack,
  Icon,
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
  const theme = useTheme()
  const navigation = useNavigation()

  function handleGoback() {
    navigation.goBack()
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <HeaderWrapper>
          <GoBack onPress={handleGoback}>
            <Icon name="arrowleft" />
          </GoBack>
          <LogoRota66
            width={RFValue(129)}
            height={RFValue(125)}
                  />
        </HeaderWrapper>

        <FormsWrapper>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            placeholderTextColor={theme.colors.secundary}
          />
          <Input
            placeholder="E-mail"
            autoCorrect={false}
            placeholderTextColor={theme.colors.secundary}
          />
          <Input
            placeholder="Data de Nascimento"
            dataDetectorTypes={'calendarEvent'}
            autoCorrect={false}
            placeholderTextColor={theme.colors.secundary}
          />
          <Input
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry
            placeholderTextColor={theme.colors.secundary}
          />
          <Input
            placeholder="Confirmar Senha"
            autoCorrect={false}
            secureTextEntry
            placeholderTextColor={theme.colors.secundary}
          />

          <Button title="Salvar" onPress={() => {}} style={{ marginTop: 6 }} />
       

        <Title>Ou realizar login com</Title>

        <SocialLoginWrapper>
          <AppleLogin>
            <AppleLogo width={RFValue(35)} height={RFValue(35)} />
          </AppleLogin>

          <GoogleLogin>
            <GoogleLogo width={RFValue(35)} height={RFValue(35)} />
          </GoogleLogin>
        </SocialLoginWrapper>
        </FormsWrapper>
      </Container>
    </TouchableWithoutFeedback>
  )
}
