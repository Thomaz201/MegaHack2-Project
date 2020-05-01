import Goal from '../models/goals';

interface GoalDTO {
  name: string;
  totalvalue: number;
  sparedvalue: number;
  userid: string;
}

class GoalsRepository {
  private goals: Goal[];

  constructor() {
    this.goals = [];
  }

  public create({ name, totalvalue, sparedvalue, userid }: GoalDTO): Goal {
    const goal = new Goal({ name, totalvalue, sparedvalue, userid });

    this.goals.push(goal);

    return goal;
  }
}

export default GoalsRepository;
