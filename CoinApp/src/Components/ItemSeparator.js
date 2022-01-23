import React from 'react'
import { View } from 'react-native'
import { useTheme } from '@/Hooks'

const ItemSeparator = () => {
  const { List } = useTheme()
  return <View style={List.separator} />
}

export default ItemSeparator
