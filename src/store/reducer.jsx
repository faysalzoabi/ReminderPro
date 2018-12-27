import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from './coonstants';
import { bake_cookie, read_cookie} from 'sfcookies';

const initState = {
    reminders:[]
}

const reminder = (action) => {
    return {
        text:action.payload,
        id: Math.floor(Math.random() * 10),
        duedate: action.duedate
    }
}

const reducer = (state=initState, action) => {
    let reminders = null
    state.reminders = read_cookie('reminders')
    switch(action.type){
        case ADD_REMINDER:
            reminders = [...state.reminders, reminder(action)]
            bake_cookie('reminders', reminders)
            return{
                ...state,
                reminders
            }
        case DELETE_REMINDER:
            reminders = state.reminders.filter(reminder => action.payload !== reminder.id)
            bake_cookie('reminders', reminders)
            return {
                ...state,
                reminders
            }
        case CLEAR_REMINDERS:
            reminders = []
            bake_cookie('reminders', reminders)
            return{
                ...state,
                reminders
            }
    default:
        return state;
    }
}

export default reducer