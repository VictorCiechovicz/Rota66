import React, { useState, useEffect } from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { FlatList } from 'react-native'

import firestore from '@react-native-firebase/firestore'

import { Container, ChappterWrapper } from './styles'
import { Header } from '../../../../../components/Header'
import { ScrollView } from 'react-native'
import { VerseItem } from '../../../../../components/VerseItem'
import { Loading } from '../../../../../components/Loading'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

export type AudioProps = {
  id: string
  title: string
  capitulo: string
  livro: string
  playlist: string
  duration: string
  url: string
}

export function Apocalipse1() {
  const [isLoading, setIsLoading] = useState(true)
  const [audios, setAudios] = useState<AudioProps[]>([])

  const theme = useTheme()
  const navigation = useNavigation()
  const estaNaTela = useIsFocused()

  function handleOpenAudio() {
    navigation.navigate('ApocalipseAudio1')
  }

  function handleGoback() {
    navigation.goBack()
  }

  function handleOpenDetails(audiosId: string) {
    navigation.navigate('Details', { audiosId })
  }

  // useEffect(() => {
  //   setIsLoading(true)
  //
  //   const audioInf = firestore()
  //     .collection<AudioProps>('audios')
  //     .where('livro', '==', 'Apocalipse')
  //     .where('capitulo', '==', '1')
  //     .onSnapshot(snapshot => {
  //       const data = snapshot.docs.map(doc => {
  //         const { title, capitulo, livro, playlist, duration, url } = doc.data()
  //
  //         return {
  //           id: doc.id,
  //           title,
  //           capitulo,
  //           livro,
  //           playlist,
  //           duration,
  //           url
  //         }
  //       })
  //       setAudios(data)
  //       setIsLoading(false)
  //     })
  //   return audioInf
  // }, [estaNaTela])
  //
  // if (isLoading) {
  //   return <Loading />
  // }

  return (
    <Container>
      <Header onPress={handleGoback} title="Apocalipse-1" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChappterWrapper>
          <VerseItem
            title="Estudo 200 - Crônicas 1-6"
            duration="26"
            onPressContent={handleOpenAudio}
            onPressAddPlayList={() => {}}
          />
        </ChappterWrapper>
      </ScrollView>
    </Container>
  )
}
