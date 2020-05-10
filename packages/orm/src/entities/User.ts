import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	username: string

	@Column() password: string

	@Column('varchar', { length: 20, nullable: true, comment: 'oauth provider' })
	provider?: string | null

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date
}
