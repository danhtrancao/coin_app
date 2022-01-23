import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'

const ListHeader = () => {
  const { t } = useTranslation()
  const { List, Layout } = useTheme()
  return (
    <View style={Layout.backgroundHeader}>
      <View style={Layout.row}>
        <View style={Layout.noFlex}>
          <Text style={List.textStyle}>{t('market.no')}</Text>
        </View>
        <View style={Layout.coinFlex}>
          <Text style={List.textStyle}>{t('market.coin')}</Text>
        </View>
        <View style={Layout.priceFlex}>
          <Text style={List.textStyle}>{t('market.price')}</Text>
        </View>
        <View style={Layout.durationFlex}>
          <Text style={List.textStyle}>{t('market.duration')}</Text>
        </View>
        <View style={Layout.marketCapFlex}>
          <Text style={List.textStyle}>{t('market.marketCap')}</Text>
        </View>
      </View>
      <View style={List.lineStyle} />
    </View>
  )
}

export default ListHeader
