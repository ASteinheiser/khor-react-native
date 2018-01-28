import React                                       from 'react'
import { NavigationActions, DrawerItems }          from 'react-navigation'
import { ScrollView, Text, View, Image, Platform } from 'react-native'
import { connect }                                 from 'react-redux'
import { bindActionCreators }                      from 'redux'
import { fade }                                    from 'material-ui/utils/colorManipulator'
import styled                                      from 'styled-components/native'

import { getTheme } from '../../redux/actions/theme'
import { white }    from '../../colors.js'

class SideMenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      primaryColor: '',
      secondaryColor: ''
    }
  }

  render() {
    return (
      <LinkText>
        {this.props.text}
      </LinkText>
    )
  }
}

const LinkText = styled.Text`
  font-size: 16;
  font-family: 'Roboto';
  color: ${props => props.active ? white : fade(white, 0.8)};
`

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTheme
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SideMenuItem)
