import { Router } from 'express';
import { parseISO } from 'date-fns';
import CreateGoalService from '../services/CreateGoalService';

const goalsRouter = Router();

goalsRouter.post('/', async (request, response) => {
  try {
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

    return response.json(goal);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default goalsRouter;
