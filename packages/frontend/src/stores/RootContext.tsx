import { UserJwtModel, InterestGetInterestsResult } from '@progress/api'
import React, { createContext, useEffect, useState } from 'react'
import { AuthService } from 'src/services/AuthService'
// import { UserJwtModel } from '../../../api/src/models/AuthModel'
import { useInterests } from '../hooks/useInterests'

export interface IRootContextProps {}

export const RootContext = createContext<{
  user: UserJwtModel | null
  authenticated: boolean
  interests: InterestGetInterestsResult[]
  bookmarkUrl: string
}>({
  user: null,
  authenticated: false,
  interests: [],
  bookmarkUrl: '',
})

export default ({ children }: { children: any }) => {
  const preUser = AuthService.getCurrentUser() || null
  const [user, setUser] = useState(preUser)
  const [authenticated, setAuthenticated] = useState(preUser ? true : false)
  const [interests, setInterests] = useInterests()
  const [bookmarkUrl, setBookmarkUrl] = useState('')

  useEffect(() => {
    const newUser = AuthService.getCurrentUser() || null
    setUser(newUser)
    setAuthenticated(newUser ? true : false)
  }, [authenticated])

  const defaultContext = {
    user,
    authenticated,
    interests,
    bookmarkUrl,
  }

  return <RootContext.Provider value={defaultContext}>{children}</RootContext.Provider>
}
