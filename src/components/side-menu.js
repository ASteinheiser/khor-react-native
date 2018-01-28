import React                                       from 'react'
import { ScrollView, Text, View, Image, Platform } from 'react-native'
import { connect }                                 from 'react-redux'
import { bindActionCreators }                      from 'redux'
import styled                                      from 'styled-components/native'

import SideMenuItem from './side-menu-item.js'
import logo         from '../../assets/icons/khor_icon_trans.png'

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      primaryColor: '',
      secondaryColor: ''
    }
  }

  render () {
    return (
      <ScrollView>
        <Margin>
          <FlexRow>
            <MarginRight>
              <Logo source={logo}/>
            </MarginRight>
            <FlexCenter>
              <BoxBorder>
                <HeaderText>
                  KHOR
                </HeaderText>
              </BoxBorder>
            </FlexCenter>
          </FlexRow>
        </Margin>
        <SideMenuItem
          active={this.props.activeItemKey === 'Dashboard'}
          text='Dashboard'
          route='Dashboard' />
        <SideMenuItem
          active={this.props.activeItemKey === 'Fitness'}
          text='Fitness'
          route='Fitness' />
        <SideMenuItem
          active={this.props.activeItemKey === 'Pantry'}
          text='Pantry'
          route='Pantry' />
        <SideMenuItem
          active={this.props.activeItemKey === 'Recipes'}
          text='Recipes'
          route='Recipes' />
        <SideMenuItem
          active={this.props.activeItemKey === 'Shopping List'}
          text='Shopping List'
          route='Shopping List' />
        <SideMenuItem
          active={this.props.activeItemKey === 'Settings'}
          text='Settings'
          route='Settings' />
      </ScrollView>
    )
  }
}

const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
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
`
