/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderWidth: 1,
        borderColor: Colors.text,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 50,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      titleViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      },
      titleTextViewStyle: {
        flex: 8,
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
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
    }),
  }
}
