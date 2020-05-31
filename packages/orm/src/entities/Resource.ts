import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from '.'

@Entity()
export class Resource extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Index()
  @ManyToOne(type => User)
  @JoinColumn({ name: 'created_user_id' })
  public createdUser: User

  @Column('varchar', { length: 300, comment: 'name' })
  public title: string

  @Column('varchar', { length: 1024, comment: 'name' })
  public description?: string

  @Column('varchar', { length: 1024, comment: 'name' })
  public image?: string

  @Column('varchar', { length: 100, comment: 'name' })
  public mediaType?: string

  @Column('varchar', { length: 100, comment: 'name' })
  public contentType?: string

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public updatedAt: Date
}
