import { APIS, InterestGetInterestsRequest } from '@progress/api'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { AuthService } from '../services/AuthService'

export function useInterests(): [string[], Dispatch<SetStateAction<string[]>>] {
  const [interests, setInterests] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const apis = new APIS.Interest()
      const user: any = AuthService.getCurrentUser()
      if (user) {
        const params = new InterestGetInterestsRequest()
        params.user = user.id
        const { success, data, error } = await apis.getInterests(params)
        if (error) {
        }
        if (success && data) {
          setInterests([
            ...interests.filter((d: string) => d !== 'Add new'),
            ...data.filter((d: any) => d !== 'Add new').map((d: any) => d.interest),
            'Add new',
          ])
        }
      }
    }
    fetchData()
  }, [])

  return [interests, setInterests]
}
