import {LOGIN} from '../components/Login'


const initialState = {
    user: []
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN: 
            return {
                ...state,
                user: [action.payload]
            }
        default: 
            return state
    }
}
