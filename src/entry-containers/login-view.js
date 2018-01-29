import React                 from 'react'
import { ScrollView, View }  from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Toolbar }           from 'react-native-material-ui'
import styled                from 'styled-components/native'

import Button  from '../components/button.js'
import Divider from '../components/divider.js'

class Login extends React.Component {
  render() {
    return (
      <Flex>
        <Toolbar centerElement='Login' />

        <Container>
          <Margin>
            <Button
              primary
              icon="subdirectory-arrow-right"
              text="Login"
              onPress={()=> this.props.navigation.navigate('Dashboard')} />
          </Margin>

          <Divider />

          <Margin>
            <Button
              accent
              icon="assignment"
              text="Register"
              onPress={()=> {
                this.props.navigation.dispatch(NavigationActions.reset({
                  index: 0,
                  actions: [ NavigationActions.navigate({ routeName: 'Register'}) ]
                }))
              }} />
          </Margin>
          <Margin>
            <Button
              accent
              icon="help-outline"
              text="Forgot Password"
              onPress={()=> {
                this.props.navigation.dispatch(NavigationActions.reset({
                  index: 0,
                  actions: [ NavigationActions.navigate({ routeName: 'ForgotPassword'}) ]
                }))
              }} />
          </Margin>
        </Container>
      </Flex>
    )
  }
}
export default Login

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
