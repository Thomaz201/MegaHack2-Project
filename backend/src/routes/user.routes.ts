import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import UsersRepository from '../repositories/userRepository';

const usersRouter = Router();

const userRepository = new UsersRepository();

usersRouter.get('/', (request, response) => {
  try {
    const users = userRepository.all();

    return response.json(users);
  } catch (err) {
    return response.status(400).json({ error: 'Could not list Users' });
  }
});

usersRouter.post('/', (request, response) => {
  try {
    const { username, email, password, goal } = request.body;

    const createUser = new CreateUserService(userRepository);

    const user = createUser.execute({
      username,
      password,
      email,
      goal,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: 'Could not create User' });
  }
});

export default usersRouter;
