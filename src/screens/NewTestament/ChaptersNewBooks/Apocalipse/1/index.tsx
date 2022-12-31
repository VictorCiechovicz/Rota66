import React, { useState, useEffect } from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { FlatList } from 'react-native'

import firestore from '@react-native-firebase/firestore'

import { Container, ChappterWrapper } from './styles'
import { Header } from '../../../../../components/Header'
import { ScrollView } from 'react-native'
import { VerseItem, AudioProps } from '../../../../../components/VerseItem'
import { Loading } from '../../../../../components/Loading'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

export function Apocalipse1() {
  const [isLoading, setIsLoading] = useState(true)
  const [audios, setAudios] = useState<AudioProps[]>([])

  const theme = useTheme()
  const navigation = useNavigation()
  const estaNaTela = useIsFocused()

  function handleGoback() {
    navigation.goBack()
  }

  function handleOpenDetails(audiosId: string) {
    navigation.navigate('Details', { audiosId })
  }

  useEffect(() => {
    setIsLoading(true)

    const audioInf = firestore()
      .collection<AudioProps>('audios')
      .where('livro', '==', 'Gn')
      .where('capitulo', '==', '1')
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => {
          const {
            titulo,
            capitulo,
            livro,
            playlist,
            time,
            descricao,
            tema,
            url
          } = doc.data()

          return {
            id: doc.id,
            titulo,
            capitulo,
            livro,
            playlist,
            descricao,
            tema,
            time,
            url
          }
        })
        setAudios(data)
        setIsLoading(false)
      })
    return audioInf
  }, [estaNaTela])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <Header onPress={handleGoback} title="Apocalipse-1" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChappterWrapper>
          {isLoading ? (
            <Loading />
          ) : (
            <FlatList
              data={audios}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <VerseItem
                  data={item}
                  onPress={() => handleOpenDetails(item.id)}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 100 }}
            />
          )}
        </ChappterWrapper>
      </ScrollView>
    </Container>
  )
}
