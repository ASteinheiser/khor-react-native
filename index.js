import React                 from 'react'
import { Provider, connect } from 'react-redux'
import { AppRegistry }       from 'react-native'
import { ThemeProvider }     from 'react-native-material-ui'

import Router    from './src/router.js'
import { store } from './redux/config'

function mapStateToProps(state) {
  return {
    theme: state.theme
  }
}
class WrappedThemeProvider extends React.Component {
  render(){
    return (
      <ThemeProvider uiTheme={this.props.theme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}

ConnectedThemeProvider = connect(mapStateToProps)(WrappedThemeProvider)


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
