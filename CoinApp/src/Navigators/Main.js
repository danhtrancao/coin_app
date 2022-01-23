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
            <Icon name="bar-chart-outline" color="#887700" />
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
            <Icon name="star-outline" color="#887700" />
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
            <Icon name="search-outline" color="#887700" />
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
            <Icon name="ellipsis-horizontal-outline" color="#887700" />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

export default MainNavigator
