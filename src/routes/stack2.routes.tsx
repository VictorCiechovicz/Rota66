import { createNativeStackNavigator } from '@react-navigation/native-stack'
const { Navigator, Screen } = createNativeStackNavigator()

import { Home } from '../screens/Home'
import { NewTestament } from '../screens/NewTestament'
import { OldTestament } from '../screens/OldTestament'

//ChaptersNewTestaments
import { Apocalipse } from '../screens/NewTestament/ChaptersNewBooks/Apocalipse'
import { Apocalipse1 } from '../screens/NewTestament/ChaptersNewBooks/Apocalipse/1'

export function StackRouteHome() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HomeStack" component={Home} />
      <Screen name="NewTestament" component={NewTestament} />
      <Screen name="OldTestament" component={OldTestament} />
      <Screen name="Apocalipse" component={Apocalipse} />
      <Screen name="Apocalipse1" component={Apocalipse1} />
    </Navigator>
  )
}
