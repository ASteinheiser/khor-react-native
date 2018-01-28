import React                      from 'react'
import { ScrollView, View, Text } from 'react-native'
import { connect }                from 'react-redux'
import { NavigationActions }      from 'react-navigation'
import { bindActionCreators }     from 'redux'
import { Icon, Toolbar }          from 'react-native-material-ui'
import styled                     from 'styled-components/native'

import { setTheme } from '../../redux/actions/theme'

import Button from '../components/button.js'

class SettingsDashboard extends React.Component {

  logout = () => {
    // this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <Flex>
        <Toolbar
          centerElement='Settings'
          leftElement='menu'
          onLeftElementPress={()=>{this.props.navigation.navigate('DrawerToggle')}}
        />
        <Container>
          <Margin>
            <Button
              primary
              icon="palette"
              text="Pink Theme"
              onPress={() => {
                this.props.setTheme('pinkTheme')
                this.props.navigation.dispatch(NavigationActions.reset({
                  index: 0,
                  actions: [ NavigationActions.navigate({ routeName: 'SettingsDashboard'}) ]
                }))
              }} />
          </Margin>
          <Margin>
            <Button
              primary
              icon="palette"
              text="Green Theme"
              onPress={() => {
                this.props.setTheme('greenTheme')
                this.props.navigation.dispatch(NavigationActions.reset({
                  index: 0,
                  actions: [ NavigationActions.navigate({ routeName: 'SettingsDashboard'}) ]
                }))
              }} />
          </Margin>
          <Margin>
            <Button
              accent
              icon="subdirectory-arrow-left"
              text="Logout"
              onPress={this.logout} />
          </Margin>
        </Container>
      </Flex>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setTheme
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SettingsDashboard)

const Flex = styled.View`
  flex: 1;
`

const Container = styled.ScrollView`
  background-color: #303030;
  flex: 1;
`

const Margin = styled.View`
  margin: 20px 20px 0 20px;
`
