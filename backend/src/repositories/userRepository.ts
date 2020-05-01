import User from '../models/users';

interface GoalUserDTO {
  total: number;
  sparedValue: number;
}

interface UserDTO {
  password: string;
  email: string;
  username: string;
  goal?: Array<GoalUserDTO>;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public all(): User[] {
    return this.users;
  }

  public create({ email, password, username, goal }: UserDTO): User {
    const user = new User({ email, password, username, goal });

    this.users.push(user);

    return user;
  }
}

export default UsersRepository;
