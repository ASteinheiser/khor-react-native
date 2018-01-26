import { Platform } from 'react-native'
import deepAssign   from 'deep-assign'
import cloneDeep    from 'lodash.clonedeep'
import { fade }     from 'material-ui/utils/colorManipulator'

import {
  pink700,
  blueGrey700,
  white,
  green900 } from './colors.js'

let height = 90
let padding = 25

if (Platform.OS === 'ios') {
  height = 80
  padding = 15
}

export const defaultTheme = {
  // spacing: spacing,
  // typography: typography,
  fontFamily: 'Roboto',
  palette: {
    primaryColor: pink700,
    accentColor: blueGrey700,
    primaryTextColor: fade(white, 0.8),
    secondaryTextColor: fade(white, 0.8),
    canvasColor: '#303030',
    borderColor: fade(white, 0.3),
    disabledColor: fade(white, 0.3),
    // pickerHeaderColor: fade(white, 0.12),
    // clockCircleColor: fade(white, 0.12),
  },
  toolbar: {
    container: {
      height: height
    },
    centerElementContainer: {
      paddingTop: padding
    },
    leftElementContainer: {
      paddingTop: padding
    },
    rightElementContainer: {
      paddingTop: padding
    }
  }
}

export const greenTheme = deepAssign({}, cloneDeep(defaultTheme) ,{
  palette: {
    primaryColor: green900,
  }
})
