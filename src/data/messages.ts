import { users } from './users';

export const initialMessages = [
  {
    id: 1,
    text: 'Hey everyone, welcome to the chat!',
    timestamp: '10:00 AM',
    user: users[1],
  },
  {
    id: 2,
    text: 'Glad to be here! This looks great.',
    timestamp: '10:01 AM',
    user: users[2],
  },
  {
    id: 3,
    text: 'Let\'s get this conversation started. What is everyone working on?',
    timestamp: '10:02 AM',
    user: users[0],
  },
];
