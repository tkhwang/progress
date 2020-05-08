import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateTaskDto } from '@progress/api'
import { Task } from 'src/orm/task.entity'
// import { Task } from './task.model'
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {
	constructor(private readonly tasksService: TasksService) {}

	@Get()
	getHello() {
		return {
			message: 'hello',
			time: new Date(),
		}
	}

	@Get('/:id')
	getTaskById(@Param('id') id: number): Promise<Task> {
		return this.tasksService.getTaskById(id)
	}

	// @Get()
	// getAllTasks(): Task[] {
	// 	return this.tasksService.getAllTasks()
	// }

	// @Post()
	// createTask(@Body() createTaskDto: CreateTaskDto) {
	// 	return this.tasksService.createTask(createTaskDto)
	// }
}
