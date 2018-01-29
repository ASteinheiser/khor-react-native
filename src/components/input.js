import React         from 'react'
import { TextInput } from 'react-native'
import { connect }   from 'react-redux'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      borderColor: this.props.theme.palette.disabledColor
    }
  }

  render() {
    return (
      <TextInput
        numberOfLines={1}
        autoCorrect={false}
        returnKeyType={'done'}
        onFocus={() => this.setState({ borderColor: this.props.theme.palette.primaryColor })}
        onBlur={() => this.setState({ borderColor: this.props.theme.palette.disabledColor })}
        selectionColor={this.props.theme.palette.secondaryTextColor}
        placeholderTextColor={this.props.theme.palette.primaryTextColor}
        style={{
          borderBottomWidth: 2,
          borderColor: this.state.borderColor,
          color: this.props.theme.palette.primaryTextColor,
          fontFamily: this.props.theme.fontFamily,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 30,
          paddingLeft: 5,
          fontSize: 18,
        }}
        {...this.props}
      />
    )
  }
}

function mapStateToProps(state) {
  return { theme: state.theme }
}

export default connect(mapStateToProps)(Input)
