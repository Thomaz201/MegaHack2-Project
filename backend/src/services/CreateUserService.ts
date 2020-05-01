import { hash } from 'bcryptjs';
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

  public async execute({
    username,
    email,
    password,
    goal,
  }: RequestDTO): Promise<User> {
    const checkUserExists = this.userRepository.findEqual(email);

    if (checkUserExists) {
      throw new Error('This user already exists');
    }

    const hashedPassword = await hash(password, 8);

    const user = this.userRepository.create({
      email,
      password: hashedPassword,
      username,
      goal,
    });
    return user;
  }
}

export default CreateUserService;
