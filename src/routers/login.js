import { StackNavigator } from 'react-navigation'

import LoginView      from '../entry-containers/login-view.js'
import Register       from '../containers/register.js'
import ForgotPassword from '../containers/forgot-password.js'

const Login = StackNavigator(
  {
    LoginView: {
      screen: LoginView,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null
      }
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: 'LoginView'
  }
)

export default Login
