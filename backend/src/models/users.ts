import { uuid } from 'uuidv4';

class User {
  id: string;

  password: string;

  email: string;

  username: string;

  constructor({ username, email, password }: Omit<User, 'id'>) {
    this.id = uuid();
    this.username = username;
    this.password = password;
    this.email = email;
  }
}

export default User;
