import React from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
// import { changeTheme } from '@/Store/Theme'
import LinearGradient from 'react-native-linear-gradient'

const MoreContainer = () => {
  const { t } = useTranslation()
  const { Layout } = useTheme()

  // Change dark/light mode (enhance later)
  // const dispatch = useDispatch()
  // const onChangeTheme = ({ theme, darkMode }) => {
  //   dispatch(changeTheme({ theme, darkMode }))
  // }

  return (
    // Change dark/light mode (enhance later)
    // <ScrollView
    //   style={Layout.fill}
    //   contentContainerStyle={[
    //     Layout.fill,
    //     Layout.colCenter,
    //     Gutters.smallHPadding,
    //   ]}
    // >
    //   <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>
    //     {t('more.darkMode')}
    //   </Text>

    //   <TouchableOpacity
    //     style={[Common.button.rounded, Gutters.regularBMargin]}
    //     onPress={() => onChangeTheme({ darkMode: null })}
    //   >
    //     <Text style={Fonts.textRegular}>{t('more.auto')}</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity
    //     style={[Common.button.outlineRounded, Gutters.regularBMargin]}
    //     onPress={() => onChangeTheme({ darkMode: true })}
    //   >
    //     <Text style={Fonts.textRegular}>{t('more.dark')}</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity
    //     style={[Common.button.outline, Gutters.regularBMargin]}
    //     onPress={() => onChangeTheme({ darkMode: false })}
    //   >
    //     <Text style={Fonts.textRegular}>{t('more.light')}</Text>
    //   </TouchableOpacity>
    // </ScrollView>
    <LinearGradient
      colors={['#1d1e22', '#1e2829', '#213333']}
      style={Layout.fill}
    >
      <View style={Layout.groupDetail}>
        <View style={Layout.groupInfo}>
          <Text style={Layout.titleDetail}>{t('more.darkMode')}</Text>
          <Text style={Layout.bodyDetail}>{t('more.yes')}</Text>
        </View>

        <View style={Layout.groupInfo}>
          <Text style={Layout.titleDetail}>{t('more.currency')}</Text>
          <Text style={Layout.bodyDetail}>{t('more.usd')}</Text>
        </View>

        <View style={Layout.groupInfo}>
          <Text style={Layout.titleDetail}>{t('more.coinNumber')}</Text>
          <Text style={Layout.bodyDetail}>{t('more.oneHunred')}</Text>
        </View>

        <View style={Layout.groupInfo}>
          <Text style={Layout.titleDetail}>{t('more.duration')}</Text>
          <Text style={Layout.bodyDetail}>{t('more.durationTime')}</Text>
        </View>

        <View style={Layout.groupInfo}>
          <Text style={Layout.titleDetail}>{t('more.support')}</Text>
          <Text style={Layout.bodyDetail}>{t('more.coinGeckoApi')}</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default MoreContainer
