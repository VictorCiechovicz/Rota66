import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'

import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons'

import { StackRouteHome } from './stack2.routes'
import { PlayList } from '../screens/PlayList'
import { Perfil } from '../screens/Perfil'
import { Setings } from '../screens/Setings'
import { RFValue } from 'react-native-responsive-fontsize'

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRouts() {
  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          height: 55
        },
        tabBarLabelStyle: {
           marginBottom: 5,
          fontSize: RFValue(10),
          fontFamily: theme.fonts.regular
        },
        tabBarActiveTintColor: theme.colors.secundary,
        tabBarInactiveTintColor: theme.colors.shape
      }}
    >
      <Screen
        name="Home"
        component={StackRouteHome}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={27} color={color} />
          )
        }}
      />
      <Screen
        name="Playlist"
        component={PlayList}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="playlist-add" size={27} color={color} />
          )
        }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={27} color={color} />
          )
        }}
      />
      <Screen
        name="Configurações"
        component={Setings}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={27} color={color} />
          )
        }}
      />
    </Navigator>
  )
}
