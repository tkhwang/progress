import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Interest } from './Interest'
import { User } from './User'

@Entity()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column('varchar', { length: 300, comment: 'name' })
  public name: string

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public updatedAt: Date
}
