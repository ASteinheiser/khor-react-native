import React       from 'react'
import { Button }  from 'react-native-material-ui'
import { connect } from 'react-redux'

import {
  pink700,
  green800,
  red800,
  purple800,
  teal700 } from '../../colors.js'

class StyledButton extends React.Component {
  render() {
    var buttonStyle = {
      container: {
        height: 50
      },
      text: {
        fontFamily: this.props.theme.fontFamily,
        color: this.props.theme.palette.secondaryTextColor,
        fontWeight: 'bold',
        fontSize: 16
      }
    }
    if(this.props.color) {
      switch(this.props.color) {
        case 'pink':
          buttonStyle.container.backgroundColor = pink700
          break;
        case 'green':
          buttonStyle.container.backgroundColor = green800
          break;
        case 'red':
          buttonStyle.container.backgroundColor = red800
          break;
        case 'blue':
          buttonStyle.container.backgroundColor = teal700
          break;
        case 'purple':
          buttonStyle.container.backgroundColor = purple800
          break;
        default:
          return null
      }
    }

    return (
      <Button
        raised
        style={buttonStyle}
        {...this.props}
      />
    )
  }
}

function mapStateToProps(state) {
  return { theme: state.theme }
}

export default connect(mapStateToProps)(StyledButton)
