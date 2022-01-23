import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'

const EmptyList = () => {
  const { t } = useTranslation()
  return <Text style={styles.emptyListStyle}>{t('message.notFound')}</Text>
}

export default EmptyList

const styles = StyleSheet.create({
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
})
