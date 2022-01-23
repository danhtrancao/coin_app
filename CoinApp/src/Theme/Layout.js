import { StyleSheet } from 'react-native'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function () {
  return StyleSheet.create({
    /* Column Layouts */
    column: {
      flexDirection: 'column',
    },
    columnReverse: {
      flexDirection: 'column-reverse',
    },
    colCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    colVCenter: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    colHCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    /* Row Layouts */
    row: {
      flexDirection: 'row',
    },
    rowReverse: {
      flexDirection: 'row-reverse',
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowVCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    rowHCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    /* Default Layouts */
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    alignItemsCenter: {
      alignItems: 'center',
    },
    alignItemsStart: {
      alignItems: 'flex-start',
    },
    alignItemsStretch: {
      alignItems: 'stretch',
    },
    justifyContentCenter: {
      justifyContent: 'center',
    },
    justifyContentAround: {
      justifyContent: 'space-around',
    },
    justifyContentBetween: {
      justifyContent: 'space-between',
    },
    scrollSpaceAround: {
      flexGrow: 1,
      justifyContent: 'space-around',
    },
    scrollSpaceBetween: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    selfStretch: {
      alignSelf: 'stretch',
    },
    /* Sizes Layouts */
    fill: {
      flex: 1,
    },
    noFlex: {
      flex: 0.5,
    },
    coinFlex: {
      flex: 1.5,
    },
    priceFlex: {
      flex: 2.5,
    },
    durationFlex: {
      flex: 1.5,
    },
    twoFlex: {
      flex: 2,
    },
    marketCapFlex: {
      flex: 3.5,
    },
    fiveFlex: {
      flex: 5,
    },
    fullSize: {
      height: '100%',
      width: '100%',
    },
    fullWidth: {
      width: '100%',
    },
    fullHeight: {
      height: '100%',
    },
    /* Operation Layout */
    mirror: {
      transform: [{ scaleX: -1 }],
    },
    rotate90: {
      transform: [{ rotate: '90deg' }],
    },
    rotate90Inverse: {
      transform: [{ rotate: '-90deg' }],
    },
    container: {
      flex: 1,
      backgroundColor: 'green',
    },
    groupDetail: {
      backgroundColor: '#233131',
      borderRadius: 10,
      margin: 15,
      padding: 10,
    },
    input: {
      fontSize: 14,
      color: 'white',
    },
    headerTitle: {
      fontSize: 16,
      color: 'white',
      paddingLeft: 10,
    },
    header: {
      backgroundColor: '#1d1e22',
      height: 50,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    nameTitle: {
      color: 'white',
      fontWeight: '600',
      fontSize: 17,
      paddingStart: 10,
    },
    codeNameTitle: {
      color: 'grey',
      fontWeight: '600',
      fontSize: 17,
      paddingStart: 3,
    },
    groupText: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logo: {
      height: 20,
      width: 20,
      marginStart: 10,
    },
    price_change_percentage_high: {
      color: 'green',
      fontSize: 15,
      marginStart: 2,
    },
    price_change_percentage_low: {
      color: 'red',
      fontSize: 15,
      marginStart: 2,
    },
    groupPrice: {
      flexDirection: 'row',
      marginStart: 15,
      alignItems: 'center',
    },
    current_price_title: {
      color: 'white',
      fontSize: 20,
      fontWeight: '800',
    },
    groupInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 0.5,
      borderBottomColor: 'grey',
      paddingVertical: 5,
    },
    titleDetail: {
      color: 'grey',
      fontSize: 12,
      fontWeight: '500',
      paddingVertical: 10,
    },
    bodyDetail: {
      color: 'white',
      fontWeight: '600',
      fontSize: 14,
    },
  })
}
