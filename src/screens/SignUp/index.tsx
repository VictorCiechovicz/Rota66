import React, { useState,useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
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

import { Loading } from '../../components/Loading'

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const theme = useTheme()
  const navigation = useNavigation()

  function handleGoback() {
    navigation.goBack()
  }
  
  useEffect(() => {
    const user = auth().currentUser
    user.providerData.forEach(userInfo => {
      console.log(userInfo)
      setNome(userInfo.displayName)
     })
  }, [])

  async function handleNewUser() {
    if (!email || !password || !nome) {
      return Alert.alert('Entrar', 'Preencha todos os campos.')
    }
    const update = {
      displayName: nome,
     }
    setIsLoading(true)
    auth()
       .createUserWithEmailAndPassword(email, password)

       await auth() 
       .currentUser.updateProfile(update)
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
            onChangeText={setNome}
            placeholder="Nome"
            autoCorrect={false}
            placeholderTextColor={theme.colors.secundary}
          />
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
            onPress={handleNewUser}
            style={{ marginTop: 6 }}
          />

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
