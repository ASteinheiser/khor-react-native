import * as themes from "../../themes"

export const SET_THEME = "SET_THEME"
export const GET_THEME = "GET_THEME"

export function setTheme(name){
    if (themes[name]) {
        return {
            type: SET_THEME,
            payload: themes[name]
        }
    }
    return {}
}

