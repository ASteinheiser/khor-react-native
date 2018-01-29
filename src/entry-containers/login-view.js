import React                from 'react'
import { ScrollView, View } from 'react-native'
import { Toolbar }          from 'react-native-material-ui'
import styled               from 'styled-components/native'

import Button from '../components/button.js'

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
  margin: 25px 20px;
`
