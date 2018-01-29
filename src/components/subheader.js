import React         from 'react'
import { Subheader } from 'react-native-material-ui'
import { connect }   from 'react-redux'

class StyledSubheader extends React.Component {
  render() {
    return (
      <Subheader
        style={{
          text: {
            color: this.props.theme.palette.primaryTextColor
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

export default connect(mapStateToProps)(StyledSubheader)
