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
      color: 'white',
    },
    itemStyle: {
      padding: 10,
      textAlign: 'center',
      fontSize: 14,
      color: 'white',
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
    mediumLogo: {
      width: 30,
      height: 30,
    },
    itemText: {
      padding: 10,
      color: 'white',
    },
    emptyListStyle: {
      padding: 10,
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
    },
    separator: {
      height: 0.5,
      width: '100%',
      backgroundColor: '#C8C8C8',
    },
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
    backgroundHeader: {
      flexDirection: 'column',
      backgroundColor: 'lightgrey',
    },
    paddingBottom: {
      paddingBottom: 40,
    },
    paddingBottomMore: {
      paddingBottom: 50,
    },
  })
}
