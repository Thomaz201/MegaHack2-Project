import { uuid } from 'uuidv4';

class Goal {
  id: string;

  name: string;

  totalvalue: number;

  sparedvalue: number;

  userid?: string;

  constructor({ name, totalvalue, sparedvalue, userid }: Omit<Goal, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.totalvalue = totalvalue;
    this.sparedvalue = sparedvalue;
    this.userid = userid;
  }
}

export default Goal;
