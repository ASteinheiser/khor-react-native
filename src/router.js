import React                                       from 'react'
import { ScrollView, Text, View, Image, Platform } from 'react-native'
import { DrawerNavigator, DrawerItems }            from 'react-navigation'
import { fade }                                    from 'material-ui/utils/colorManipulator'
import styled                                      from 'styled-components/native'
import { pink700, blueGrey700, white }             from '../colors.js'

import Pantry        from './routers/pantry.js'
import Recipes       from './routers/recipes.js'
import Schedule      from './routers/schedule.js'
import WatchPage     from './routers/watch-page.js'
import ShoppingList  from './routers/shopping-list.js'
import Settings      from './routers/settings.js'

import logo from '../assets/icons/khor_icon_trans.png'

const Router = DrawerNavigator(
  {
    Inventory: {
      screen: Pantry
    },
    Recipes: {
      screen: Recipes
    },
    'Shopping List': {
      screen: ShoppingList
    },
    'Task List': {
      screen: Schedule
    },
    'Fitness Dashboard': {
      screen: WatchPage
    },
    Settings: {
      screen: Settings
    }
  },
  {
    initialRouteName: 'Inventory',
    drawerBackgroundColor: '#303030',
    contentComponent: props => {
      return (
        <ScrollView>
          <Margin>
            <FlexRow>
              <MarginRight>
                <Logo source={logo}/>
              </MarginRight>
              <FlexCenter>
                <Underline>
                  <StyledText>
                    KHOR
                  </StyledText>
                </Underline>
              </FlexCenter>
            </FlexRow>
          </Margin>
          <DrawerItems {...props}/>
        </ScrollView>
      )
    },
    contentOptions: {
      labelStyle: {
        fontFamily: 'Roboto',
        fontSize: 16,
      },
      activeTintColor: white,
      activeBackgroundColor: pink700,
      inactiveTintColor: fade(white, 0.8),
    }
  }
)

export default Router

const StyledText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${pink700};
`

let Margin = styled.View`
  margin: 55px 0 30px 20px;
`

if (Platform.OS === 'ios') {
  Margin = styled.View`
    margin: 45px 0 30px 20px;
  `
}

const MarginRight = styled.View`
  margin-right: 20px;
`

const FlexRow = styled.View`
  flex: 1;
  flex-direction: row;
`

const Logo = styled.Image`
  width: 50px;
  height: 50px;
`

const FlexCenter = styled.View`
  flex-direction: column;
  justify-content: space-around;
`

const Underline = styled.View`
  padding: 3px 7px;
  border-width: 2px;
  border-color: ${blueGrey700};
`
