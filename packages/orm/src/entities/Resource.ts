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
export class Resource extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @ManyToOne(type => User)
  @JoinColumn({ name: 'created_user_id' })
  public createdUser: User

  @ManyToOne(type => Interest)
  @JoinColumn({ name: 'interest_id' })
  public interest: Interest

  @Column('varchar', { length: 1024, comment: 'url' })
  public url?: string

  @Column('varchar', { length: 300, comment: 'siteName' })
  public siteName?: string

  @Column('varchar', { length: 300, comment: 'title' })
  public title: string

  @Column('varchar', { length: 1024, comment: 'description' })
  public description?: string

  @Column('varchar', { length: 1024, comment: 'image' })
  public image?: string

  @Column('varchar', { length: 1024, comment: 'screenshot' })
  public screenshot?: string

  @Column('varchar', { length: 100, comment: 'mediaType' })
  public mediaType?: string

  @Column('varchar', { length: 100, comment: 'contentType' })
  public contentType?: string

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public updatedAt: Date
}
