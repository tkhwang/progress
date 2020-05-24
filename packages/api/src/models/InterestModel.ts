import { IsDefined, IsNumber, IsString } from 'class-validator'

export class InterestPostInterestRequest {
  @IsDefined()
  @IsString()
  public interest: string

  @IsDefined()
  @IsNumber()
  public user: number
}

export class InterestPostInterestResponse {
  public interestId: number | undefined | null
}

export enum InterestPostInterestErrors {
  DUPLICATE_INTEREST_REGISTRATION_NOT_ALLOWED = 'Duplication interest registration is not allowed.',
  NO_USER_FOUND = 'No user found',
}
