import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm'
import { User } from '.'
import { Interest } from './Interest'

@Entity()
@Unique([''])
export class Resource extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Index()
  @ManyToOne(type => User)
  @JoinColumn({ name: 'created_user_id' })
  public createdUser: User

  @OneToOne(type => Interest)
  @JoinColumn()
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

  @Column('varchar', { length: 100, comment: 'mediaType' })
  public mediaType?: string

  @Column('varchar', { length: 100, comment: 'contentType' })
  public contentType?: string

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public updatedAt: Date
}
