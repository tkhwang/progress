import { User } from '@progress/orm'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  /**
   * Find user by email
   *
   * @param {string} email
   * @returns {(Promise<User | undefined>)}
   * @memberof UsersService
   */
  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.findOne({ where: { email } })
  }

  /**
   * Find user by provider name and providerId.
   *
   * @param {string} provider : OAuthProvider.{GOOGLE, }
   * @param {string} id       : providerId by OAuth provider
   * @returns {(Promise<User | undefined>)}
   * @memberof UsersService
   */
  async findOneBySocial(provider: string, id: string): Promise<User | undefined> {
    return this.findOne({ where: { provider, provider_id: id } })
  }
}
