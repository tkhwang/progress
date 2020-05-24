import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column('varchar', { length: 10, comment: 'name' })
  public username: string

  @Column('varchar', { length: 300, comment: 'password' })
  public password: string

  @Column('varchar', { length: 50, comment: 'email' })
  public email: string

  @Column('varchar', { length: 20, nullable: true, comment: 'oauth social provider' })
  public provider?: string | null

  @Column('varchar', { length: 20, nullable: true, comment: 'oauth social providerId' })
  public providerId?: string | null

  @Column('varchar', { nullable: true, length: 200, comment: 'user avatar link' })
  public imageUrl: string | null

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public updatedAt: Date
}
