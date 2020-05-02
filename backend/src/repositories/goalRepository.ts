import { EntityRepository, Repository } from 'typeorm';

import Goal from '../models/goals';

interface Difference {
  dif: number;
  percent: string;
}

@EntityRepository(Goal)
class GoalsRepository extends Repository<Goal> {
  public getDifference(totalvalue: number, sparedvalue: number): Difference {
    const dif = totalvalue - sparedvalue;
    const percent = ((sparedvalue / totalvalue) * 100).toFixed(2);

    return { dif, percent };
  }
}

export default GoalsRepository;
