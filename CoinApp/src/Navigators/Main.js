import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  MarketContainer,
  MoreContainer,
  SearchContainer,
  WatchlistContainer,
} from '@/Containers'
import Icon from 'react-native-vector-icons/Ionicons'

const BottomTab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="Market"
        component={MarketContainer}
        options={{
          tabBarIconStyle: { display: 'flex' },
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ color, size }) => (
            <Icon name="bar-chart-outline" size={20} color="#93CC4F" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Watchlist"
        component={WatchlistContainer}
        options={{
          tabBarIconStyle: { display: 'flex' },
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ color, size }) => (
            <Icon name="star-outline" size={20} color="#93CC4F" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchContainer}
        options={{
          tabBarIconStyle: { display: 'flex' },
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search-outline" size={20} color="#93CC4F" />
          ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreContainer}
        options={{
          tabBarIconStyle: { display: 'flex' },
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ellipsis-horizontal-outline" size={20} color="#93CC4F" />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

export default MainNavigator
