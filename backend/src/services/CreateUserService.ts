import User from '../models/users';
import UsersRepository from '../repositories/userRepository';

interface GoalUserDTO {
  total: number;
  sparedValue: number;
}

interface RequestDTO {
  password: string;
  email: string;
  username: string;
  goal?: Array<GoalUserDTO>;
}

class CreateUserService {
  private userRepository: UsersRepository;

  constructor(userRepository: UsersRepository) {
    this.userRepository = userRepository;
  }

  public execute({ username, email, password, goal }: RequestDTO): User {
    const user = this.userRepository.create({
      email,
      password,
      username,
      goal,
    });
    return user;
  }
}

export default CreateUserService;
