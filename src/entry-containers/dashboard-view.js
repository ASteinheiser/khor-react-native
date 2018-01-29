import React                      from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Icon, Toolbar }          from 'react-native-material-ui'
import styled                     from 'styled-components/native'
import { connect }                from 'react-redux'
import SplashScreen               from 'react-native-splash-screen'

class Dashboard extends React.Component {
  componentWillMount () {
    SplashScreen.hide()
  }

  render() {
    return (
      <Flex>
        <Toolbar
          centerElement='Dashboard'
          leftElement='menu'
          onLeftElementPress={()=>{this.props.navigation.navigate('DrawerToggle')}}
        />
        <Container color={this.props.theme.palette.canvasColor}>
          <Margin>
            <FlexRow>
              <MarginRight>
                <Icon name='settings'/>
              </MarginRight>
              <StyledText>
                Dashboard under construction...
              </StyledText>
            </FlexRow>
          </Margin>
        </Container>
      </Flex>
    )
  }
}

function mapStateToProps(state) {
  return { theme: state.theme }
}

export default connect(mapStateToProps)(Dashboard)

const Flex = styled.View`
  flex: 1;
`

const Container = styled.ScrollView`
  background-color: ${props => props.color};
  flex: 1;
`

const Margin = styled.View`
  margin: 25px 20px;
`

const StyledText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`

const FlexRow = styled.View`
  flex: 1;
  flex-direction: row;
`

const MarginRight = styled.View`
  margin-right: 10px;
`
