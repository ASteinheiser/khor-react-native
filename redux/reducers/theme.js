import { SET_THEME } from "../actions/theme"
import * as themes from "../../themes"

console.log(themes)

export default function(state = themes['defaultTheme'], { type, payload }){
    switch(type) {
        case SET_THEME:
            return payload
        default:
            return state
    }
}