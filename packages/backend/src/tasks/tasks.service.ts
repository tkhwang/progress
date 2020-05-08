import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateTaskDto } from '@progress/api'
import { Task } from 'src/orm/task.entity'
import { TaskRepository } from './task.repository'
// import { Task, TaskStatus } from './task.model'

@Injectable()
export class TasksService {
	constructor(
		@InjectRepository(TaskRepository)
		private readonly taskRepository: TaskRepository,
	) {}

	async getTaskById(id: number): Promise<Task> {
		const found = await this.taskRepository.findOne(id)
		if (!found) throw new NotFoundException(`Task with ID "${id} not found.`)
		return found
	}

	// private readonly tasks: Task[] = []
	// getAllTasks(): Task[] {
	// 	return this.tasks
	// }
	// createTask(createTaskDto: CreateTaskDto) {
	// 	const { title, description } = createTaskDto
	// 	const task: Task = {
	// 		id: uuid(),
	// 		title: title,
	// 		description: description,
	// 		status: TaskStatus.OPEN
	// 	}
	// 	this.tasks.push(task)
	// 	return task
	// }
}
