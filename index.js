import React                 from 'react'
import { Provider, connect } from 'react-redux'
import { PersistGate }       from 'redux-persist/lib/integration/react'
import { AppRegistry }       from 'react-native'
import { ThemeProvider }     from 'react-native-material-ui'

import Router    from './src/router.js'
import { store, persistor } from './redux/config'

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


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedThemeProvider>
            <Router />
          </ConnectedThemeProvider>
        </PersistGate>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Khor', () => App)
