import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'

const ListHeader = () => {
  const { t } = useTranslation()
  return (
    <View style={{ flexDirection: 'column', backgroundColor: 'lightgrey' }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.textStyle}>{t('market.no')}</Text>
        </View>
        <View style={{ flex: 1.5 }}>
          <Text style={styles.textStyle}>{t('market.coin')}</Text>
        </View>
        <View style={{ flex: 2.5 }}>
          <Text style={styles.textStyle}>{t('market.price')}</Text>
        </View>
        <View style={{ flex: 1.5 }}>
          <Text style={styles.textStyle}>{t('market.duration')}</Text>
        </View>
        <View style={{ flex: 3.5 }}>
          <Text style={styles.textStyle}>{t('market.marketCap')}</Text>
        </View>
      </View>
      <View style={styles.lineStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    padding: 7,
  },
  lineStyle: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
})

export default ListHeader
