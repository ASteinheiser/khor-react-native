import React                     from 'react'
import { AppRegistry, Platform } from 'react-native'
import { ThemeProvider }         from 'react-native-material-ui'
import { fade }                  from 'material-ui/utils/colorManipulator'

import Router                          from './src/router.js'
import { pink700, blueGrey700, white } from './colors.js'

let height = 90
let padding = 25
if (Platform.OS === 'ios') {
  height = 80
  padding = 15
}

const uiTheme = {
  // spacing: spacing,
  // typography: typography,
  fontFamily: 'Roboto',
  palette: {
    primaryColor: pink700,
    accentColor: blueGrey700,
    primaryTextColor: fade(white, 0.8),
    secondaryTextColor: fade(white, 0.8),
    canvasColor: '#303030',
    borderColor: fade(white, 0.3),
    disabledColor: fade(white, 0.3),
    // pickerHeaderColor: fade(white, 0.12),
    // clockCircleColor: fade(white, 0.12),
  },
  toolbar: {
    container: {
      height: height
    },
    centerElementContainer: {
      paddingTop: padding
    },
    leftElementContainer: {
      paddingTop: padding
    },
    rightElementContainer: {
      paddingTop: padding
    }
  }
}

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Router />
      </ThemeProvider>
    )
  }
}

AppRegistry.registerComponent('Khor', () => App)
