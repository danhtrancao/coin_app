import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { getMarketList } from '@/Services/api'
import { EmptyListMessage, ItemSeparator, ListHeader } from '@/Components'
import {
  convertStringToCurrency,
  convertStringToCurrencyDecimal,
} from '@/Services/utils'
import { t } from 'i18next'
import { useTheme } from '@/Hooks'

const MarketContainer = ({ navigation }) => {
  const [marketCoins, setMarketCoinList] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [isRefreshing, setRefresing] = useState(false)
  const { List, Layout, Common } = useTheme()

  useEffect(() => {
    let isMounted = true
    setLoading(true)

    // Fetch market list for the first time
    getMarketList().then(items => {
      if (isMounted) {
        setMarketCoinList(items)
        setLoading(false)
      }
    })

    // Fetch market list for the update latest informations (current price, ...)
    const intervalId = setInterval(() => {
      isMounted = true
      getMarketList().then(items => {
        if (isMounted) {
          setMarketCoinList(items)
        }
      })
    }, 20000)

    return () => {
      clearInterval(intervalId)
      isMounted = false
    }
  }, [])

  const onNavigateSearchContainer = () => {
    navigation.navigate('Search')
  }

  const onRefresh = () => {
    let mounted = true
    setRefresing(true)
    getMarketList().then(items => {
      if (mounted) {
        setMarketCoinList(items)
        setRefresing(false)
      }
    })
    return () => {
      mounted = false
    }
  }

  const ItemDetailView = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigateToCoinDetail(item)}>
          <View style={List.itemDetailViewStyle}>
            <View style={Layout.noFlex}>
              <Text style={List.itemNoStyle}>{item.market_cap_rank}</Text>
            </View>
            <View style={[List.itemCoinViewStyle, Layout.coinFlex]}>
              <Image
                style={List.tinyLogo}
                source={{
                  uri: item.image,
                }}
              />
              <Text numberOfLines={1} style={List.itemStyle}>
                {item.symbol.toUpperCase()}
              </Text>
            </View>
            <View style={Layout.priceFlex}>
              <Text style={List.itemStyle}>
                {convertStringToCurrencyDecimal(item.current_price)}
              </Text>
            </View>
            <View style={Layout.durationFlex}>
              <Text
                style={
                  item.price_change_percentage_24h.toFixed(2) >= 0
                    ? List.itemIncreaseStyle
                    : List.itemDecreaseStyle
                }
              >
                {item.price_change_percentage_24h.toFixed(2)}%
              </Text>
            </View>
            <View style={Layout.marketCapFlex}>
              <Text style={List.itemStyle}>
                {convertStringToCurrency(item.market_cap)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const navigateToCoinDetail = item => {
    navigation.navigate('CoinDetail', {
      id: item.id,
    })
  }

  return (
    <SafeAreaView>
      <View style={Common.titleViewStyle}>
        <Text style={Common.titleTextViewStyle}>{t('name')}</Text>
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
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={marketCoins}
          stickyHeaderIndices={[0]}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={ListHeader}
          renderItem={ItemDetailView}
          ListEmptyComponent={EmptyListMessage}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
      )}
    </SafeAreaView>
  )
}

export default MarketContainer
