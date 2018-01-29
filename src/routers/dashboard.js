import { StackNavigator } from 'react-navigation'

import DashboardView from '../entry-containers/dashboard-view.js'

const Dashboard = StackNavigator(
  {
    DashboardView: {
      screen: DashboardView,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'DashboardView'
  }
)

export default Dashboard
