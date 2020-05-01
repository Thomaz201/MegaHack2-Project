import Goal from '../models/goals';
import GoalsRepository from '../repositories/goalRepository';

interface RequestDTO {
  name: string;
  totalvalue: number;
  sparedvalue: number;
  userid: string;
}

class CreateGoalService {
  private goalRepository: GoalsRepository;

  constructor(goalRepository: GoalsRepository) {
    this.goalRepository = goalRepository;
  }

  public execute({ name, totalvalue, sparedvalue, userid }: RequestDTO): Goal {
    const goal = this.goalRepository.create({
      name,
      totalvalue,
      sparedvalue,
      userid,
    });

    return goal;
  }
}

export default CreateGoalService;
