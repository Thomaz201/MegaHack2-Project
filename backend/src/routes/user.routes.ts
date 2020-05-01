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

usersRouter.post('/', async (request, response) => {
  try {
    const { username, email, password } = request.body;

    const createUser = new CreateUserService(userRepository);

    const user = await createUser.execute({
      username,
      password,
      email,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
