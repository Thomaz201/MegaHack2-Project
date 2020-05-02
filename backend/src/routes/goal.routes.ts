import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import CreateGoalService from '../services/CreateGoalService';
import GoalsRepository from '../repositories/goalRepository';

const goalsRouter = Router();

goalsRouter.post('/', async (request, response) => {
  try {
    const goalsrepository = getCustomRepository(GoalsRepository);

    const { name, totalvalue, sparedvalue, date } = request.body;

    const userid = request.headers.authorization;

    const parsedDate = parseISO(date);

    const createGoal = new CreateGoalService();

    const goal = await createGoal.execute({
      name,
      totalvalue,
      sparedvalue,
      userid,
      date: parsedDate,
    });

    const difference = goalsrepository.getDifference(totalvalue, sparedvalue);

    return response.json({ goal, difference });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default goalsRouter;
