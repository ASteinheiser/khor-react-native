import { StackNavigator } from 'react-navigation'

import LoginView from '../entry-containers/login-view.js'

const Login = StackNavigator(
  {
    LoginView: {
      screen: LoginView,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'LoginView'
  }
)

export default Login
