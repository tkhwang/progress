import * as React from 'react'
import { useEffect, useState } from 'react'
import { APIS, GetResourceRequest, ResourceCardModel } from '@progress/api'
import querystring from 'query-string'
import { ResourceCard } from 'src/components/ResourceCard'

export interface IInterestsProps {
  location?: any
  history?: any
}

export default function Interests(props: IInterestsProps) {
  const [resources, setResources] = useState<ResourceCardModel[]>([])

  useEffect(() => {
    const fetchData = async (selectedInterest: string) => {
      const apis = new APIS.Resource()
      const param = new GetResourceRequest()
      param.interest = selectedInterest
      console.log('fetchData -> selectedInterest', selectedInterest)
      const { success, data, error } = await apis.getResource(param)
      if (success && data) {
        console.log('fetchData -> data', data)
        setResources([...resources, ...data])
      }
    }

    const { interest } = querystring.parse(props.location.search)
    if (interest) fetchData(interest as string)
  }, [])

  return (
    <React.Fragment>
      <h1>Interest</h1>
      {resources.map((resource: ResourceCardModel) => (
        <ResourceCard
          key={resource.title}
          title={resource.title ? resource.title : ''}
          siteName={resource.siteName ? resource.siteName : ''}
          image={resource.image ? resource.image : ''}
        />
      ))}
    </React.Fragment>
  )
}
