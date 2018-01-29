import React                 from 'react'
import { ScrollView, View }  from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Toolbar }           from 'react-native-material-ui'
import { connect }           from 'react-redux'
import styled                from 'styled-components/native'

import Button  from '../components/button.js'
import Divider from '../components/divider.js'
import Input   from '../components/input.js'

class Login extends React.Component {
  render() {
    return (
      <Flex>
        <Toolbar centerElement='Login' />

        <Container color={this.props.theme.palette.canvasColor}>

          <Input
            keyboardType={'email-address'}
            // onChange
            // onSubmitEditing
            placeholder={'Email Address'}
            // value
            />
          <Input
            secureTextEntry={true}
            // onChange
            // onSubmitEditing
            placeholder={'Password'}
            // value
            />

          <TopMargin>
            <Button
              primary
              icon="subdirectory-arrow-right"
              text="Login"
              onPress={()=> this.props.navigation.navigate('Dashboard')} />
          </TopMargin>

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

function mapStateToProps(state) {
  return { theme: state.theme }
}

export default connect(mapStateToProps)(Login)

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

const TopMargin = styled.View`
  margin: 30px 20px 0 20px;
`
