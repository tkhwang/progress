import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm'
import { User } from '.'

@Entity()
@Unique(['interest', 'createdUser'])
export class Interest extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column('varchar', { length: 300, comment: 'name' })
  public interest: string

  @Index()
  @ManyToOne(type => User)
  @JoinColumn({ name: 'created_user_id' })
  public createdUser: User

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public updatedAt: Date
}
