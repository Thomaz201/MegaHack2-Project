import User from '../models/users';

interface UserDTO {
  password: string;
  email: string;
  username: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public all(): User[] {
    return this.users;
  }

  public create({ email, password, username }: UserDTO): User {
    const user = new User({ email, password, username });

    this.users.push(user);

    return user;
  }

  // Validação do email
  public findEqual(email: string): User | null {
    const findUser = this.users.find(user => email === user.email);

    return findUser || null;
  }
}

export default UsersRepository;
