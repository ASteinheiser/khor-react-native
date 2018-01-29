import React       from 'react'
import { Button }  from 'react-native-material-ui'
import { connect } from 'react-redux'

class StyledButton extends React.Component {
  render() {
    return (
      <Button
        raised
        style={{
          container: {
            height: 50
          },
          text: {
            fontFamily: this.props.theme.fontFamily,
            color: this.props.theme.palette.secondaryTextColor,
            fontWeight: 'bold',
            fontSize: 16
          }
        }}
        {...this.props}
      />
    )
  }
}

function mapStateToProps(state) {
  return { theme: state.theme }
}

export default connect(mapStateToProps)(StyledButton)
