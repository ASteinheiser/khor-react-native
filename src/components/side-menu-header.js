import React                    from 'react'
import { Text, View, Platform } from 'react-native'
import styled                   from 'styled-components/native'
import SvgIcon                  from 'react-native-svg-icon'

import svgs from '../../assets/svgs.js'

export default class SideMenuHeader extends React.Component {
  render() {
    return (
      <Margin>
        <FlexRow>
          <MarginRight>
            <SvgIcon
              name="LogoInner"
              fill={this.props.theme.palette.primaryColor}
              height={80}
              width={80}
              viewBox={'0 0 100 100'}
              svgs={svgs} />
            {/* <SvgIcon
              name="LogoInner"
              svgs={svgs} /> */}
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

const FlexCenter = styled.View`
  flex-direction: column;
  justify-content: space-around;
`

const BoxBorder = styled.View`
  padding: 3px 7px;
  border-width: 2px;
  border-color: ${props => props.color}
`
