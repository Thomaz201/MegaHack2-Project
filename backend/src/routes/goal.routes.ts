import { Router } from 'express';
import CreateGoalService from '../services/CreateGoalService';
import GoalsRepository from '../repositories/goalRepository';

const goalsRouter = Router();

const goalRepository = new GoalsRepository();

goalsRouter.post('/', (request, response) => {
  try {
    const { name, totalvalue, sparedvalue, userid } = request.body;

    const createGoal = new CreateGoalService(goalRepository);

    const goal = createGoal.execute({
      name,
      totalvalue,
      sparedvalue,
      userid,
    });

    return response.json(goal);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default goalsRouter;
