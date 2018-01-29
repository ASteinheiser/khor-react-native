import React                 from 'react'
import { ScrollView, View }  from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Toolbar }           from 'react-native-material-ui'
import { connect }           from 'react-redux'
import styled                from 'styled-components/native'

import Button  from '../components/button.js'
import Divider from '../components/divider.js'

class ForgotPassword extends React.Component {
  render() {
    return (
      <Flex>
        <Toolbar centerElement='Retrieve Password' />

        <Container color={this.props.theme.palette.canvasColor}>
          <Margin>
            <Button
              primary
              icon="cached"
              text="Retrieve Password"
              onPress={() => {
                this.props.navigation.dispatch(NavigationActions.reset({
                  index: 0,
                  actions: [ NavigationActions.navigate({ routeName: 'LoginView'}) ]
                }))
              }} />
          </Margin>

          <Divider />

          <Margin>
            <Button
              accent
              icon="close"
              text="Cancel"
              onPress={() => {
                this.props.navigation.dispatch(NavigationActions.reset({
                  index: 0,
                  actions: [ NavigationActions.navigate({ routeName: 'LoginView'}) ]
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

export default connect(mapStateToProps)(ForgotPassword)

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
