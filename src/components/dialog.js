import React          from 'react'
import { View, Text } from 'react-native'
import { Dialog }     from 'react-native-material-ui'
import { connect }    from 'react-redux'
import styled         from 'styled-components/native'

class StyledDialog extends React.Component {
  render() {
    return (
      <FloatingContainer size={this.props.theme.toolbar.container.height}>
        <Dialog>
          <Dialog.Title>
            <HeaderText color={this.props.theme.palette.secondaryTextColor}>
              {this.props.header}
            </HeaderText>
          </Dialog.Title>
          <Dialog.Content>
            <BodyText color={this.props.theme.palette.primaryTextColor}>
              {this.props.body}
            </BodyText>
          </Dialog.Content>
          <Dialog.Actions>
            {this.props.children}
          </Dialog.Actions>
        </Dialog>
      </FloatingContainer>
    )
  }
}

function mapStateToProps(state) {
  return { theme: state.theme }
}

export default connect(mapStateToProps)(StyledDialog)

const FloatingContainer = styled.View`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: ${props => props.size};
  bottom: 0;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const HeaderText = styled.Text`
  color: ${props => props.color};
  font-size: 20px;
`

const BodyText = styled.Text`
  color: ${props => props.color};
  font-size: 14px;
`
