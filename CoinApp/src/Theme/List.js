import { StyleSheet } from 'react-native'

export default function List() {
  return StyleSheet.create({
    itemCoinViewStyle: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      paddingTop: 10,
    },
    itemDetailViewStyle: {
      flex: 1,
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
    },
    itemNoStyle: {
      padding: 0,
      textAlign: 'center',
      fontSize: 12,
    },
    itemStyle: {
      padding: 10,
      textAlign: 'center',
      fontSize: 14,
    },
    itemIncreaseStyle: {
      padding: 10,
      textAlign: 'center',
      fontSize: 14,
      color: 'green',
    },
    itemDecreaseStyle: {
      padding: 10,
      textAlign: 'center',
      fontSize: 14,
      color: 'red',
    },
    tinyLogo: {
      width: 20,
      height: 20,
    },
  })
}
