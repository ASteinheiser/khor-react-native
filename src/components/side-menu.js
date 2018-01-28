import React          from 'react'
import { connect }    from 'react-redux'
import { ScrollView } from 'react-native'

import SideMenuHeader from './side-menu-header.js'
import SideMenuItem   from './side-menu-item.js'

class SideMenu extends React.Component {
  render () {
    return (
      <ScrollView>

        <SideMenuHeader theme={this.props.theme} />

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
