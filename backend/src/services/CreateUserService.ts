import { hash } from 'bcryptjs';
import User from '../models/users';
import UsersRepository from '../repositories/userRepository';

interface RequestDTO {
  password: string;
  email: string;
  username: string;
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
    });
    return user;
  }
}

export default CreateUserService;
