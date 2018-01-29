import React       from 'react'
import { Divider } from 'react-native-material-ui'

export default class StyledDivider extends React.Component {
  render() {
    return (
      <Divider
        style={{
          container: {
            marginLeft: 20,
            marginRight: 20,
            marginTop: 30,
            marginBottom: 10
          }
        }}
      />
    )
  }
}
