export enum TaskStatus {
	OPEN = 'OPEN',
	IN_PROGRESS = 'IN_PROGRESS',
	DONE = 'DONE',
}

export class CreateTaskDto {
	title: string
	description: string
}
