import { User } from "../models/user";

export const USERS: User[] = [
  {
    id: 'u1',
    username: 'johndoe',
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
    profilePictureUrl: '/assets/profiles/john.png',
    createdAt: new Date('2024-01-10')
  },
  {
    id: 'u2',
    username: 'janesmith',
    email: 'jane@example.com',
    firstName: 'Jane',
    lastName: 'Smith',
    profilePictureUrl: '/assets/profiles/jane.png',
    createdAt: new Date('2024-03-22')
  },
  {
    id: 'u3',
    username: 'mike',
    email: 'mike@domain.com',
    firstName: 'Mike',
    lastName: 'Brown',
    createdAt: new Date('2024-05-01')
  },
  {
    id: 'u4',
    username: 'amenallah53',
    email: 'amenkalai53@gmail.com',
    firstName: 'amenallah',
    lastName: 'kalai',
    createdAt: new Date('2024-05-01')
  }
];
