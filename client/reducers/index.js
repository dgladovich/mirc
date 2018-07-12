import { combineReducers } from 'redux'
import controllersReducer from './controllers';
import messagesReducer from './messages';




const rootReducer = combineReducers({
    controllers: controllersReducer,
    messages: messagesReducer
})

export default rootReducer