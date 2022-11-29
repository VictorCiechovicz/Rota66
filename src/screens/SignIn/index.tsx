import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { useTheme } from 'styled-components'
import auth from '@react-native-firebase/auth'

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

import { Loading } from '../../components/Loading'

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
  const theme = useTheme()

  function handleNewUser() {
    navigation.navigate('SignUp')
  }
  function forgotPassword() {
    navigation.navigate('ForgotPassword')
  }
  function handleSignIn() {
    if (!email || !password) {
      return Alert.alert('Entrar', 'Informe E-mail e Senha.')
    }
    setIsLoading(true)

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error)
        setIsLoading(false)

        if (error.code === 'auth/invalid-email') {
          return Alert.alert('Entrar', 'E-mail inválido.')
        }

        if (error.code === 'auth/wrong-password') {
          return Alert.alert('Entrar', 'E-mail ou Senha inválida.')
        }

        if (error.code === 'auth/user-not-found') {
          return Alert.alert('Entrar', 'E-mail ou Senha inválida.')
        }

        return Alert.alert('Entrar', 'Não foi possível acessar')
      })
  }

  if (isLoading) {
    return <Loading />
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
            onChangeText={setEmail}
            placeholder="E-mail"
            autoCorrect={false}
            placeholderTextColor={theme.colors.secundary}
          />
          <Input
            onChangeText={setPassword}
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry
            placeholderTextColor={theme.colors.secundary}
          />
          <OuthersChanges>
            <SingUp onPress={handleNewUser}>
              <Title>Primeiro acesso</Title>
            </SingUp>

            <ForgotPassword onPress={forgotPassword}>
              <Title>Esqueceu a senha?</Title>
            </ForgotPassword>
          </OuthersChanges>

          <Button title="Entrar" onPress={handleSignIn} />
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
