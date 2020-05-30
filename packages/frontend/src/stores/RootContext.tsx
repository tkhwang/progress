import { APIS, InterestGetInterestsRequest } from '@progress/api'
import React, { createContext, useEffect, useState } from 'react'
import { AuthService } from 'src/services/AuthService'
import { UserJwtModel } from '../../../api/src/models/AuthModel'

export interface IRootContextProps {}

export const RootContext = createContext<{
  user: UserJwtModel | null;
  authenticated: boolean;
  interests: string[];
}>({
  user: null,
  authenticated: false,
  interests: [],
})

export default ({ children }: { children: any }) => {
  const preUser = AuthService.getCurrentUser() || null
  const [user, setUser] = useState(preUser)
  const [authenticated, setAuthenticated] = useState(preUser ? true : false)
  const [interests, setInterests] = useState<string[]>([])
  console.log('interests', interests)

  useEffect(() => {
    const newUser = AuthService.getCurrentUser() || null
    setUser(newUser)
    setAuthenticated(newUser ? true : false)
  }, [])

  useEffect(() => {
    const apis = new APIS.Interest()
    const fetchData = async () => {
      if (user) {
        const params = new InterestGetInterestsRequest()
        params.user = user.id
        const data = await apis.getInterests(params)
        setInterests([
          ...interests.filter((d: string) => d !== 'Add new'),
          ...data.filter((d: any) => d !== 'Add new').map((d: any) => d.interest),
        ])
      }
    }
    fetchData()
  }, interests)

  const defaultContext = {
    user,
    authenticated,
    interests,
  }

  return <RootContext.Provider value={defaultContext}>{children}</RootContext.Provider>
}
