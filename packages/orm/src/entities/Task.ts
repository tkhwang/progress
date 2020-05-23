import { TaskStatus } from '@progress/api/models'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public title: string

  @Column()
  public description: string

  @Column()
  public status: TaskStatus
}
