import React    from 'react'
import { Text } from 'react-native'
import styled   from 'styled-components/native'

export default class SideMenuItem extends React.Component {
  render() {
    return (
      <LinkText
        theme={this.props.theme}
        active={this.props.active}
        onPress={this.props.onClick}>

        {this.props.text}

      </LinkText>
    )
  }
}

const LinkText = styled.Text`
  font-size: 16;
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.active ? 'white' : props.theme.palette.primaryTextColor};
  background-color: ${props => props.active ? props.theme.palette.primaryColor : 'rgba(0,0,0,0.0)'};

  padding: 15px 0 15px 20px;
`
