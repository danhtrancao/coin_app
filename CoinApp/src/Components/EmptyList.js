import React from 'react'
import { Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'

const EmptyList = () => {
  const { List } = useTheme()
  const { t } = useTranslation()
  return <Text style={List.emptyListStyle}>{t('message.notFound')}</Text>
}

export default EmptyList
