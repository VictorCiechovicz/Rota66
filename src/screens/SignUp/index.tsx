import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { useTheme } from 'styled-components'

import { Container, HeaderWrapper, GoBack, Icon, FormsWrapper } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import LogoRota66 from '../../assets/LogoRota66.svg'

import { Loading } from '../../components/Loading'

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const theme = useTheme()
  const navigation = useNavigation()

  function handleGoback() {
    navigation.goBack()
  }

  async function handleNewUserWithEmailAndPassword() {
    if (!email || !password) {
      return Alert.alert('Entrar', 'Preencha todos os campos.')
    }

    setIsLoading(true)
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Cadastro', 'Usuario cadastrado com sucesso!')
        navigation.goBack()
      })

      .catch(error => {
        console.log(error)
        setIsLoading(false)
        //auth/email-already-in-use
        //auth/invalid-email
        //auth/operation-not-allowed
        //auth/weak-password
        if (error.code === 'auth/invalid-email') {
          return Alert.alert('Entrar', 'E-mail inválido.')
        }

        return Alert.alert('Entrar', 'Não foi possível acessar')
      })
      .finally(() => setIsLoading(false))
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <HeaderWrapper>
          <GoBack onPress={handleGoback}>
            <Icon name="arrowleft" />
          </GoBack>
          <LogoRota66 width={RFValue(129)} height={RFValue(125)} />
        </HeaderWrapper>

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

          <Button
            title="Salvar"
            onPress={handleNewUserWithEmailAndPassword}
            style={{ marginTop: 6 }}
          />
        </FormsWrapper>
      </Container>
    </TouchableWithoutFeedback>
  )
}
