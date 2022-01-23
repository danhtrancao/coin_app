import React from 'react'
import { Text, ScrollView } from 'react-native'
import { useTheme } from '@/Hooks'

const WatchlistContainer = () => {
  const { Fonts, Gutters, Layout } = useTheme()

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <Text style={[Layout.fill, Fonts.textCenter, Fonts.textSmall]}>
        Watchlist
      </Text>
    </ScrollView>
  )
}

export default WatchlistContainer
