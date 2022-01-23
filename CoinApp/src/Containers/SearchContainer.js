import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native'
import { getTrendingList, searchCoins } from '@/Services/api'
import LinearGradient from 'react-native-linear-gradient'
import { EmptyList, ItemSeparator } from '@/Components'
import { t } from 'i18next'
import { useTheme } from '@/Hooks'

const SearchContainer = ({ navigation }) => {
  const [trendyList, setTrendyList] = useState([])
  const [searchList, setSearchList] = useState([])
  const [isLoading, setLoading] = useState(false)
  const { List, Layout } = useTheme()

  const onChangeValue = async item => {
    setLoading(true)
    if (item === '') {
      setSearchList([])
    } else {
      searchCoins(item).then(items => {
        setLoading(false)
        setSearchList(items.coins)
      })
    }
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    let mounted = true
    getTrendingList().then(items => {
      if (mounted) {
        setLoading(false)
        setTrendyList(items.coins)
      }
    })
    setLoading(false)
    return () => (mounted = false)
  }, [])

  const getItem = coin => {
    navigation.navigate('CoinDetail', {
      id: coin.id,
      image: coin.thumb,
      symbol: coin.symbol,
    })
  }

  const ItemSearchView = ({ item }) => {
    return ItemDetailView(item)
  }

  const ItemTrendingView = ({ item }) => {
    return ItemDetailView(item.item)
  }

  const ItemDetailView = coin => {
    return (
      <TouchableOpacity onPress={() => getItem(coin)}>
        <View style={[Layout.row, Layout.fill]}>
          <View style={[Layout.fill, Layout.colCenter]}>
            <Image
              style={List.tinyLogo}
              source={{
                uri: coin.thumb,
              }}
            />
          </View>
          <View style={[Layout.fiveFlex, Layout.column]}>
            <Text style={List.itemText}>{coin.symbol}</Text>
            <Text style={List.itemText}>{coin.name}</Text>
          </View>
          <Text style={List.itemText}>#{coin.market_cap_rank}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={Layout.container}>
      <LinearGradient
        colors={['#1d1e22', '#1e2829', '#213333']}
        style={Layout.fill}
      >
        <View>
          <TextInput
            style={Layout.input}
            placeholder={t('search.placeHolder')}
            placeholderTextColor={'white'}
            onChangeText={text => {
              onChangeValue(text)
            }}
          />
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            <FlatList
              data={searchList}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparator}
              renderItem={ItemSearchView}
              ListEmptyComponent={EmptyList}
              contentContainerStyle={{ paddingBottom: 40 }}
            />
          </View>
        )}
        <Text style={Layout.headerTitle}>{t('search.treding')}</Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={Layout.groupDetail}>
            <FlatList
              data={trendyList}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparator}
              renderItem={ItemTrendingView}
              ListEmptyComponent={EmptyList}
              contentContainerStyle={{ paddingBottom: 50 }}
            />
          </View>
        )}
      </LinearGradient>
    </View>
  )
}

export default SearchContainer
