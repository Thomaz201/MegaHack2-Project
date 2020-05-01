import { uuid } from 'uuidv4';

interface GoalUser {
  total: number;
  sparedValue: number;
}

class User {
  id: string;

  password: string;

  email: string;

  username: string;

  goal?: Array<GoalUser>;

  constructor({ username, email, password, goal }: Omit<User, 'id'>) {
    this.id = uuid();
    this.username = username;
    this.password = password;
    this.email = email;
    this.goal = goal;
  }
}

export default User;
