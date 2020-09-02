import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm'
import { Interest } from './Interest'
import { User } from './User'

@Entity()
@Unique(['url', 'createdUser'])
export class Bookmark extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column('varchar', { length: 768, comment: 'url' })
  public url?: string

  @Column('varchar', { length: 300, comment: 'siteName' })
  public siteName?: string

  @Column('varchar', { length: 300, comment: 'title' })
  public title: string

  @Column('varchar', { length: 1024, comment: 'description' })
  public description?: string

  @Column('varchar', { length: 1024, comment: 'screenshot' })
  public screenshot?: string

  @Column('varchar', { length: 1024, comment: 'subScreenshot' })
  public subScreenshot?: string

  @ManyToOne(type => User)
  @JoinColumn({ name: 'created_user_id' })
  public createdUser: User

  @ManyToOne(type => Interest)
  @JoinColumn({ name: 'interest_id' })
  public interest?: Interest

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public updatedAt: Date
}
