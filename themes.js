import { Platform } from 'react-native'
import deepAssign   from 'deep-assign'
import cloneDeep    from 'lodash.clonedeep'
import { fade }     from 'material-ui/utils/colorManipulator'

import {
  pink700,
  green800,
  red800,
  purple800,
  teal700,
  blueGrey700,
  white } from './colors.js'

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
    secondaryTextColor: white,
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
    primaryColor: green800,
  }
})

export const pinkTheme = deepAssign({}, cloneDeep(defaultTheme) ,{
  palette: {
    primaryColor: pink700,
  }
})

export const redTheme = deepAssign({}, cloneDeep(defaultTheme) ,{
  palette: {
    primaryColor: red800,
  }
})

export const blueTheme = deepAssign({}, cloneDeep(defaultTheme) ,{
  palette: {
    primaryColor: teal700,
  }
})

export const purpleTheme = deepAssign({}, cloneDeep(defaultTheme) ,{
  palette: {
    primaryColor: purple800,
  }
})
