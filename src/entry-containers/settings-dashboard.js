import React                      from 'react'
import { ScrollView, View, Text } from 'react-native'
import { connect }                from 'react-redux'
import { NavigationActions }      from 'react-navigation'
import { bindActionCreators }     from 'redux'
import { Toolbar }                from 'react-native-material-ui'
import styled                     from 'styled-components/native'

import { setTheme } from '../../redux/actions/theme'

import Button  from '../components/button.js'
import Divider from '../components/divider.js'
import Dialog  from '../components/dialog.js'

class SettingsDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      themePopup: false
    }
  }

  render() {
    return (
      <Flex>
        <Toolbar
          centerElement='Settings'
          leftElement='menu'
          onLeftElementPress={()=>{this.props.navigation.navigate('DrawerToggle')}}
        />
        {
          this.state.themePopup ?
          <Dialog header='Theme Select' body='Pick your favorite color.'>
            <BottomMargin>
              <Button
                primary
                color="red"
                icon="palette"
                text="Red Theme"
                onPress={() => {
                  this.props.setTheme('redTheme')
                  this.props.navigation.dispatch(NavigationActions.reset({
                    index: 0,
                    actions: [ NavigationActions.navigate({ routeName: 'SettingsDashboard'}) ]
                  }))
                }} />
              </BottomMargin>
              <BottomMargin>
                <Button
                  primary
                  color="pink"
                  icon="palette"
                  text="Pink Theme"
                  onPress={() => {
                    this.props.setTheme('pinkTheme')
                    this.props.navigation.dispatch(NavigationActions.reset({
                      index: 0,
                      actions: [ NavigationActions.navigate({ routeName: 'SettingsDashboard'}) ]
                    }))
                  }} />
                </BottomMargin>
                <BottomMargin>
                  <Button
                    primary
                    color="green"
                    icon="palette"
                    text="Green Theme"
                    onPress={() => {
                      this.props.setTheme('greenTheme')
                      this.props.navigation.dispatch(NavigationActions.reset({
                        index: 0,
                        actions: [ NavigationActions.navigate({ routeName: 'SettingsDashboard'}) ]
                      }))
                    }} />
                  </BottomMargin>
                  <BottomMargin>
                    <Button
                      primary
                      color="blue"
                      icon="palette"
                      text="Blue Theme"
                      onPress={() => {
                        this.props.setTheme('blueTheme')
                        this.props.navigation.dispatch(NavigationActions.reset({
                          index: 0,
                          actions: [ NavigationActions.navigate({ routeName: 'SettingsDashboard'}) ]
                        }))
                      }} />
                    </BottomMargin>
                    <BottomMargin>
                      <Button
                        primary
                        color="purple"
                        icon="palette"
                        text="Purple Theme"
                        onPress={() => {
                          this.props.setTheme('purpleTheme')
                          this.props.navigation.dispatch(NavigationActions.reset({
                            index: 0,
                            actions: [ NavigationActions.navigate({ routeName: 'SettingsDashboard'}) ]
                          }))
                        }} />
                      </BottomMargin>
                    </Dialog>
                    :
                    <View/>
                  }
        <Container color={this.props.theme.palette.canvasColor}>
          <Margin>
            <Button
              primary
              icon="palette"
              text="Change Theme"
              onPress={() => {
                this.setState({ themePopup: true })
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

const BottomMargin = styled.View`
  margin: 0 20px 20px 20px;
`
