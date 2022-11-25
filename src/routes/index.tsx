import { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { Loading } from '../components/Loading'

import { TabRouts } from './tab.routes'
import { StackRouteSignInUser } from './stack1.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <TabRouts />
    </NavigationContainer>
  )
}
