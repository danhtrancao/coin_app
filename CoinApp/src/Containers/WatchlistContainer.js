import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/Ionicons'
import { EmptyList, ItemSeparator, ListHeader } from '@/Components'
import { useTheme } from '@/Hooks'
import {
  convertStringToCurrency,
  convertStringToCurrencyDecimal,
} from '@/Services/utils'
import { t } from 'i18next'
import LinearGradient from 'react-native-linear-gradient'

const WatchlistContainer = ({ navigation }) => {
  const onNavigateSearchContainer = () => {
    navigation.navigate('Search')
  }

  const [items, setItem] = useState([])
  const { List, Layout, Common } = useTheme()

  useEffect(() => {
    const fetchMyAPI = async () => {
      const response = await AsyncStorage.getItem('watchList')
      const data = JSON.parse(response)
      setItem(data)
    }

    fetchMyAPI()
  })

  const ItemDetailView = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigateCoinDetail(item)}>
          <View style={List.itemDetailViewStyle}>
            <View style={Layout.noFlex}>
              <Text style={List.itemNoStyle}>{item?.market_cap_rank}</Text>
            </View>
            <View style={[List.itemCoinViewStyle, Layout.coinFlex]}>
              <Image
                style={List.tinyLogo}
                source={{
                  uri: item?.image.small,
                }}
              />
              <Text numberOfLines={1} style={List.itemStyle}>
                {item.symbol.toUpperCase()}
              </Text>
            </View>
            <View style={Layout.priceFlex}>
              <Text style={List.itemStyle}>
                {convertStringToCurrencyDecimal(
                  item?.market_data?.current_price?.usd,
                )}
              </Text>
            </View>
            <View style={Layout.durationFlex}>
              <Text
                style={
                  item?.market_data?.price_change_percentage_24h.toFixed(2) >= 0
                    ? List.itemIncreaseStyle
                    : List.itemDecreaseStyle
                }
              >
                {item?.market_data?.price_change_percentage_24h.toFixed(2)}%
              </Text>
            </View>
            <View style={Layout.marketCapFlex}>
              <Text style={List.itemStyle}>
                {convertStringToCurrency(item?.market_data?.market_cap?.usd)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const navigateCoinDetail = item => {
    navigation.navigate('CoinDetail', {
      id: item.id,
      image: item.image.small,
      symbol: item.symbol,
    })
  }

  return (
    <View style={Layout.container}>
      <LinearGradient
        colors={['#1d1e22', '#1e2829', '#213333']}
        style={Layout.fill}
      >
        <View style={Common.titleViewStyle}>
          <Text style={Common.titleTextViewStyle}>{t('watchlist')}</Text>
          <TouchableOpacity
            onPress={async () => await onNavigateSearchContainer()}
          >
            <Icon
              style={Layout.twoFlex}
              size={25}
              name="search-outline"
              color="#887700"
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          stickyHeaderIndices={[0]}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={ListHeader}
          renderItem={ItemDetailView}
          ListEmptyComponent={EmptyList}
          contentContainerStyle={Common.paddingBottom}
        />
      </LinearGradient>
    </View>
  )
}

export default WatchlistContainer
