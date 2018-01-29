import React                      from 'react'
import { ScrollView, View, Text } from 'react-native'
import { connect }                from 'react-redux'
import { NavigationActions }      from 'react-navigation'
import { bindActionCreators }     from 'redux'
import { Icon, Toolbar }          from 'react-native-material-ui'
import styled                     from 'styled-components/native'

import { setTheme } from '../../redux/actions/theme'

import Button  from '../components/button.js'
import Divider from '../components/divider.js'

class SettingsDashboard extends React.Component {
  render() {
    return (
      <Flex>
        <Toolbar
          centerElement='Settings'
          leftElement='menu'
          onLeftElementPress={()=>{this.props.navigation.navigate('DrawerToggle')}}
        />
        <Container color={this.props.theme.palette.canvasColor}>
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

          <Divider />

          <Margin>
            <Button
              accent
              icon="subdirectory-arrow-left"
              text="Logout"
              onPress={()=> this.props.navigation.navigate('Login')} />
          </Margin>
        </Container>
      </Flex>
    )
  }
}

function mapStateToProps(state) {
  return { theme: state.theme }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setTheme
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsDashboard)

const Flex = styled.View`
  flex: 1;
`

const Container = styled.ScrollView`
  background-color: ${props => props.color};
  flex: 1;
`

const Margin = styled.View`
  margin: 20px 20px 0 20px;
`
