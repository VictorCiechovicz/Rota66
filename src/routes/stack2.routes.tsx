import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { NewTestament } from '../screens/NewTestament'
import { OldTestament } from '../screens/OldTestament'

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRouteHome() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HomeStack" component={Home} />
      <Screen name="NewTestament" component={NewTestament} />
      <Screen name="OldTestament" component={OldTestament} />
    </Navigator>
  )
}
