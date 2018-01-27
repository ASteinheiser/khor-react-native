import React                                       from 'react'
import { NavigationActions, DrawerItems }          from 'react-navigation'
import { ScrollView, Text, View, Image, Platform } from 'react-native'
import { connect }                                 from 'react-redux'
import { bindActionCreators }                      from 'redux'
import PropTypes                                   from 'prop-types'
import { fade }                                    from 'material-ui/utils/colorManipulator'
import styled                                      from 'styled-components/native'
import { pink700, blueGrey700, white }             from '../../colors.js'

// import { getTheme } from '../../redux/actions/theme'

import logo from '../../assets/icons/khor_icon_trans.png'

class SideMenu extends React.Component {
  render () {
    console.log(this.props)
    return (
      <ScrollView>
        <Margin>
          <FlexRow>
            <MarginRight>
              <Logo source={logo}/>
            </MarginRight>
            <FlexCenter>
              <BoxBorder>
                <StyledText>
                  KHOR
                </StyledText>
              </BoxBorder>
            </FlexCenter>
          </FlexRow>
        </Margin>
        <DrawerItems {...this.props} />
      </ScrollView>
    )
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object,
  // contentOptions: {
  //   activeTintColor: white,
  //   activeBackgroundColor: pink700,
  //   inactiveTintColor: fade(white, 0.8),
  // }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SideMenu)

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
  width: 80px;
  height: 80px;
`

const FlexCenter = styled.View`
  flex-direction: column;
  justify-content: space-around;
`

const BoxBorder = styled.View`
  padding: 3px 7px;
  border-width: 2px;
  border-color: ${blueGrey700};
`
