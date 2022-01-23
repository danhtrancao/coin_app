import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native'
import { getMarketCoin } from '@/Services/api'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import { StackActions } from '@react-navigation/native'
import { useTheme } from '@/Hooks'
import {
  convertStringToCurrencyString,
  convertStringToCurrencyDecimal,
} from '@/Services/utils'
import { t } from 'i18next'

const CoinDetailContainer = ({ route, navigation }) => {
  const [refreshing, setRefreshing] = useState(false)
  const [itemCoin, setItemCoin] = useState({})
  const [isAdding, setIsAdding] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const { id, image, symbol } = route.params
  const { List, Layout } = useTheme()

  const onAddWatchlist = async () => {
    setIsAdding(true)
    var listStoraged = await AsyncStorage.getItem('watchList')
    const arrayParse = JSON.parse(listStoraged) || []
    arrayParse.push(itemCoin)
    await AsyncStorage.setItem('watchList', JSON.stringify(arrayParse))
  }

  const onDeleteWatchlist = async () => {
    setIsAdding(false)
    var listStoraged = await AsyncStorage.getItem('watchList')
    const data = JSON.parse(listStoraged)
    const indexItem = data.findIndex(e => {
      return e.id === id
    })
    if (indexItem > -1) {
      data.splice(indexItem, 1)
    }
    await AsyncStorage.setItem('watchList', JSON.stringify(data))
  }

  useEffect(() => {
    setLoading(true)
    const getIsAdding = async () => {
      var tempStorage = await AsyncStorage.getItem('watchList')
      if (tempStorage === null) {
        setIsAdding(false)
      } else {
        const data = JSON.parse(tempStorage)
        if (
          data.some(value => {
            return value.id === id
          })
        ) {
          setIsAdding(true)
        } else {
          setIsAdding(false)
        }
      }
    }
    getIsAdding()
    let mounted = true
    getMarketCoin(id).then(items => {
      if (mounted) {
        setItemCoin(items)
        setLoading(false)
      }
    })
    setLoading(false)
    return () => (mounted = false)
  }, [id])

  const getData = coinId => {
    let mounted = true
    getMarketCoin(coinId).then(items => {
      if (mounted) {
        setItemCoin(items)
      }
    })
    return () => (mounted = false)
  }

  const onRefresh = () => {
    setRefreshing(true)
    getData(id)
    setRefreshing(false)
  }

  const current_price =
    convertStringToCurrencyDecimal(itemCoin?.market_data?.current_price?.usd) ??
    0
  const price_change_percentage_24h =
    itemCoin?.market_data?.price_change_percentage_24h.toFixed(2) ?? 0
  const market_cap_rank = itemCoin.market_cap_rank ?? 0
  const market_cap =
    convertStringToCurrencyDecimal(itemCoin.market_data?.market_cap?.usd) ?? 0
  const fully_diluted_valuation = convertStringToCurrencyDecimal(
    itemCoin?.market_data?.fully_diluted_valuation?.usd || 0,
  )
  const high_24h = convertStringToCurrencyDecimal(
    itemCoin.market_data?.high_24h?.usd || 0,
  )
  const low_24h = convertStringToCurrencyDecimal(
    itemCoin.market_data?.low_24h?.usd || 0,
  )
  const total_supply = convertStringToCurrencyString(
    itemCoin.market_data?.total_supply || 0,
  )
  const max_supply = convertStringToCurrencyString(
    itemCoin.market_data?.max_supply || 0,
  )

  return (
    <View style={Layout.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <LinearGradient
          colors={['#1d1e22', '#1e2829', '#213333']}
          style={Layout.fill}
        >
          <View style={Layout.header}>
            <View style={Layout.groupText}>
              <TouchableOpacity
                onPress={() => {
                  const popAction = StackActions.pop(1)
                  navigation.dispatch(popAction)
                }}
              >
                <View>
                  <Icon
                    name="arrow-back-outline"
                    size={30}
                    color="white"
                    style={{ paddingStart: 15 }}
                  />
                </View>
              </TouchableOpacity>
              <Image
                style={Layout.logo}
                source={{
                  uri: image,
                }}
              />
              <Text style={Layout.nameTitle}>{itemCoin.name}</Text>
              <Text style={Layout.codeNameTitle}>
                {' '}
                ({symbol.toUpperCase()})
              </Text>
            </View>
            <TouchableOpacity
              onPress={isAdding ? onDeleteWatchlist : onAddWatchlist}
            >
              <Icon
                name="star"
                size={20}
                color={isAdding ? 'yellow' : 'white'}
                style={{ paddingEnd: 15 }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            scrollEnabled={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View style={Layout.groupPrice}>
              <Text style={Layout.current_price_title}>{current_price}</Text>
              <Text
                style={
                  price_change_percentage_24h > 0
                    ? List.itemIncreaseStyle
                    : List.itemDecreaseStyle
                }
              >
                {price_change_percentage_24h}%
              </Text>
            </View>

            <View style={Layout.groupDetail}>
              <View style={Layout.groupInfo}>
                <Text style={Layout.titleDetail}>
                  {t('coinDetail.marketCapRank')}
                </Text>
                <Text style={Layout.bodyDetail}>#{market_cap_rank}</Text>
              </View>

              <View style={Layout.groupInfo}>
                <Text style={Layout.titleDetail}>
                  {t('coinDetail.marketCap')}
                </Text>
                <Text style={Layout.bodyDetail}>{market_cap}</Text>
              </View>

              <View style={Layout.groupInfo}>
                <Text style={Layout.titleDetail}>
                  {t('coinDetail.fullyDilutedValuation')}
                </Text>
                <Text style={Layout.bodyDetail}>{fully_diluted_valuation}</Text>
              </View>

              <View style={Layout.groupInfo}>
                <Text style={Layout.titleDetail}>{t('coinDetail.high')}</Text>
                <Text style={Layout.bodyDetail}>{high_24h}</Text>
              </View>

              <View style={Layout.groupInfo}>
                <Text style={Layout.titleDetail}>{t('coinDetail.low')}</Text>
                <Text style={Layout.bodyDetail}>{low_24h}</Text>
              </View>

              <View style={Layout.groupInfo}>
                <Text style={Layout.titleDetail}>
                  {t('coinDetail.totalSupply')}
                </Text>
                <Text style={Layout.bodyDetail}>{total_supply}</Text>
              </View>

              <View style={[Layout.groupInfo, { borderBottomWidth: 0 }]}>
                <Text style={Layout.titleDetail}>
                  {t('coinDetail.maxSupply')}
                </Text>
                <Text style={Layout.bodyDetail}>{max_supply}</Text>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      )}
    </View>
  )
}

export default CoinDetailContainer
