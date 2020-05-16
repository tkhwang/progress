import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column('varchar', { length: 10, comment: 'name' })
	username: string

	@Column('varchar', { length: 300, comment: 'password' })
	password: string

	@Column('varchar', { length: 50, comment: 'email' })
	email: string

	@Column('varchar', { length: 20, nullable: true, comment: 'oauth social provider' })
	provider?: string | null

	@Column('varchar', { length: 20, nullable: true, comment: 'oauth social providerId' })
	providerId?: string | null

	@Column('varchar', { nullable: true, length: 200, comment: 'user avatar link' })
	imageUrl: string | null

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date
}
