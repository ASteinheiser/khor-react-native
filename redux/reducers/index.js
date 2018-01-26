import { combineReducers } from 'redux';

// Import reducers here
import theme from './theme';


const rootReducer = combineReducers({
    theme
});

export default rootReducer;