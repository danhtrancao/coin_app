import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  MarketContainer,
  MoreContainer,
  SearchContainer,
  WatchlistContainer,
} from '@/Containers'

const BottomTab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Market"
        component={MarketContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <BottomTab.Screen
        name="Watchlist"
        component={WatchlistContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
    </BottomTab.Navigator>
  )
}

export default MainNavigator
