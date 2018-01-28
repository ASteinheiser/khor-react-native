import React                           from 'react'
import { Text, View, Image, Platform } from 'react-native'
import styled                          from 'styled-components/native'

import logo from '../../assets/icons/khor_icon_trans.png'

export default class SideMenuHeader extends React.Component {
  render() {
    return (
      <Margin>
        <FlexRow>
          <MarginRight>
            <Logo source={logo}/>
          </MarginRight>
          <FlexCenter>
            <BoxBorder color={this.props.theme.palette.accentColor}>
              <HeaderText color={this.props.theme.palette.primaryColor}>
                KHOR
              </HeaderText>
            </BoxBorder>
          </FlexCenter>
        </FlexRow>
      </Margin>
    )
  }
}

const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.color}
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
  border-color: ${props => props.color}
`
