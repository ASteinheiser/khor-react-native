import React       from 'react'
import styled      from 'styled-components/native'
import { connect } from 'react-redux'
import {
  ScrollView,
  Text,
  View,
  Image,
  Platform } from 'react-native'

import SideMenuItem from './side-menu-item.js'
import logo         from '../../assets/icons/khor_icon_trans.png'

class SideMenu extends React.Component {
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
          theme={this.props.theme}
          active={this.props.activeItemKey === 'Dashboard'}
          onClick={() => this.props.navigation.navigate('Dashboard')}
          text='Dashboard' />
        <SideMenuItem
          theme={this.props.theme}
          active={this.props.activeItemKey === 'Fitness'}
          onClick={() => this.props.navigation.navigate('Fitness')}
          text='Fitness' />
        <SideMenuItem
          theme={this.props.theme}
          active={this.props.activeItemKey === 'Pantry'}
          onClick={() => this.props.navigation.navigate('Pantry')}
          text='Pantry' />
        <SideMenuItem
          theme={this.props.theme}
          active={this.props.activeItemKey === 'Recipes'}
          onClick={() => this.props.navigation.navigate('Recipes')}
          text='Recipes' />
        <SideMenuItem
          theme={this.props.theme}
          active={this.props.activeItemKey === 'Shopping List'}
          onClick={() => this.props.navigation.navigate('Shopping List')}
          text='Shopping List' />
        <SideMenuItem
          theme={this.props.theme}
          active={this.props.activeItemKey === 'Settings'}
          onClick={() => this.props.navigation.navigate('Settings')}
          text='Settings' />
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return { theme: state.theme }
}

export default connect(mapStateToProps)(SideMenu)

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
