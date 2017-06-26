import { read_cookie, bake_cookie } from 'sfcookies';
import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

const createReminder = (action) => {
  let { dueDate, text } = action;
  return {
    id: Math.random(),
    text,
    dueDate
  }
}

const removeById = (state=[], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  return reminders;
}

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, createReminder(action)];
      bake_cookie('reminders', reminders);
    break;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('reminders', reminders);
    break;
    case CLEAR_REMINDERS:
      reminders = [];
      bake_cookie('reminders', reminders);
    break;
    default:
      reminders = state;
  }
  return reminders;
}

export default reminders;
