import { EntityRepository, Repository } from 'typeorm'
import { Task } from '../orm/task.entity'

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {}
