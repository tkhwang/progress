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
import { Tag } from './Tag'

@Entity()
export class Bookmark extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

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

  @Column('varchar', { length: 1024, comment: 'ogImage' })
  public ogImage?: string

  @Column('varchar', { length: 1024, comment: 'screenshot' })
  public screenshot?: string

  @Column('varchar', { length: 100, comment: 'mediaType' })
  public mediaType?: string

  @Column('varchar', { length: 100, comment: 'contentType' })
  public contentType?: string

  @ManyToMany(type => Tag)
  @JoinTable()
  tags: Tag[]

  @ManyToOne(type => User)
  @JoinColumn({ name: 'created_user_id' })
  public createdUser: User

  @ManyToOne(type => Interest)
  @JoinColumn({ name: 'interest_id' })
  public interest: Interest

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public updatedAt: Date
}
