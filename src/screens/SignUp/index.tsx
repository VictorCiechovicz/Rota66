import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
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
  const [userData, setUserData] = useState({})
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

  /*   async function handleNewUserWithApple() {
    const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  });

  // Ensure Apple returned a user identityToken
  if (!appleAuthRequestResponse.identityToken) {
    throw new Error('Apple Sign-In failed - no identify token returned');
  }

  // Create a Firebase credential from the response
  const { identityToken, nonce } = appleAuthRequestResponse;
  const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

  // Sign the user in with the credential
  return auth().signInWithCredential(appleCredential);
}
 */
  const handleNewUserWithGoogle = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
    const { idToken } = await GoogleSignin.signIn()
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)

    return auth().signInWithCredential(googleCredential)
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '355377107221-o0tksbtvhqh3087badjt9hrcbledldtj.apps.googleusercontent.com'
    })
  }, [])

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

          <Title>Ou realizar login com</Title>

          <SocialLoginWrapper>
            <AppleLogin>
              <AppleLogo width={RFValue(35)} height={RFValue(35)} />
            </AppleLogin>

            <GoogleLogin
              onPress={() =>
                handleNewUserWithGoogle().then(res => setUserData(res.user))
              }
            >
              <GoogleLogo width={RFValue(35)} height={RFValue(35)} />
            </GoogleLogin>
          </SocialLoginWrapper>
        </FormsWrapper>
      </Container>
    </TouchableWithoutFeedback>
  )
}
