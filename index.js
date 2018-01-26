import React                     from 'react'
import { Provider, connect }              from 'react-redux'
import { AppRegistry }           from 'react-native'
import { ThemeProvider }         from 'react-native-material-ui'

import { store } from './redux/config'


import Router                          from './src/router.js'


function mapStateToProps(state) {
  return {
    theme: state.theme
  }
}
class WrrapedThemeProvider extends React.Component {
  render(){
    console.log(this.props.theme)
    return (
      <ThemeProvider uiTheme={this.props.theme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}

ConnectedThemeProvider = connect(mapStateToProps)(WrrapedThemeProvider)


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedThemeProvider>
            <Router />
        </ConnectedThemeProvider>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Khor', () => App)
