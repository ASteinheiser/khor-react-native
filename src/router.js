import React               from 'react'
import { DrawerNavigator } from 'react-navigation'

import Dashboard    from './routers/dashboard.js'
import Pantry       from './routers/pantry.js'
import Recipes      from './routers/recipes.js'
import WatchPage    from './routers/watch-page.js'
import ShoppingList from './routers/shopping-list.js'
import Settings     from './routers/settings.js'
import SideMenu     from './components/side-menu.js'

const Router = DrawerNavigator(
  {
    'Dashboard': {
      screen: Dashboard
    },
    'Fitness': {
      screen: WatchPage
    },
    Pantry: {
      screen: Pantry
    },
    Recipes: {
      screen: Recipes
    },
    'Shopping List': {
      screen: ShoppingList
    },
    Settings: {
      screen: Settings
    }
  },
  {
    initialRouteName: 'Dashboard',
    drawerBackgroundColor: '#303030',
    contentComponent: props => <SideMenu {...props} />,
    contentOptions: {
      labelStyle: {
        fontFamily: 'Roboto',
        fontSize: 16,
      }
    }
  }
)

export default Router
