import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from './coonstants';

export const addReminder = (text, duedate) => {
    const action = {
        type:ADD_REMINDER,
        payload:text,
        duedate: duedate
    }
    console.log('action in reminder', action)
    return action
}

export const deleteReminder = (id) => {
    const action = {
        type:DELETE_REMINDER,
        payload: id
    }
    return action
}

export const clearReminders = () => {
    return {
        type:CLEAR_REMINDERS
    }
}