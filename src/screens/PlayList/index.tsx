import React from 'react'
import { FlatList } from 'react-native'

import { PlayListItem } from '../../components/PlayListItem'
import {
  Container,
  Header,
  PlayListWrapper,
  Title,
  Circle,
  Icon,
  Text
} from './styles'

export function PlayList() {
  const data = [
    {
      id: '1',
      title: 'Estudo 200 - Crônicas 1-6',
      image:
        'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg',
      duration: '45'
    }
  ]

  return (
    <Container>
      <Header>
        <Title>Playlist</Title>
      </Header>
      <PlayListWrapper>
        {data === null ? (
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <PlayListItem
                data={item}
                onPress={() => {}}
                title={item.title}
                source={item.image}
                duration={item.duration}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        ) : (
          <Circle>
            <Icon name="music-off" />
            <Text>Não possui nenhum audio cadastrado. {'\n'}</Text>
          </Circle>
        )}
      </PlayListWrapper>
    </Container>
  )
}
