import { EntityRepository, Repository } from 'typeorm';

import Goal from '../models/goals';

@EntityRepository(Goal)
class GoalsRepository extends Repository<Goal> {}

export default GoalsRepository;
