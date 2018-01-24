import React                      from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Icon, Toolbar }          from 'react-native-material-ui'
import styled                     from 'styled-components/native'

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
export default SettingsDashboard

const Flex = styled.View`
  flex: 1;
`

const Container = styled.ScrollView`
  background-color: #303030;
  flex: 1;
`

const Margin = styled.View`
  margin: 25px 20px;
`
