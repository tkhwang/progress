import * as React from 'react'
import { useEffect, useState } from 'react'
import { APIS, GetResourceRequest, ResourceCardModel } from '@progress/api'
import querystring from 'query-string'
import { ResourceCard } from 'src/components/ResourceCard'
import { SnippetsOutlined, FormOutlined } from '@ant-design/icons'
import styled from 'styled-components'

export interface IInterestsProps {
  location?: any
  history?: any
}

const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  /* margin: 30px 30px 30px 30px; */
`

export default function Interests(props: IInterestsProps) {
  const [activeInterest, setActiveInterest] = useState('')
  const [resources, setResources] = useState<ResourceCardModel[]>([])

  useEffect(() => {
    const fetchData = async (selectedInterest: string) => {
      const apis = new APIS.Resource()
      const param = new GetResourceRequest()
      param.interest = selectedInterest
      // tslint:disable-next-line:no-console
      console.log('Interests : fetchData -> selectedInterest', selectedInterest)
      const { success, data, error } = await apis.getResource(param)
      if (success && data) {
        // tslint:disable-next-line:no-console
        console.log('Interests : fetchData -> data', data)
        setResources([...resources, ...data])
      }
    }

    const { interest } = querystring.parse(props.location.search)
    if (interest) {
      setActiveInterest(interest as string)
      fetchData(interest as string)
    }
  }, [])

  return (
    <React.Fragment>
      <h1>
        <FormOutlined /> Interest > {`${activeInterest}`}
      </h1>
      <DivFlex>
        {resources.map((resource: ResourceCardModel) => (
          <ResourceCard
            key={resource.title}
            title={resource.title ? resource.title : ''}
            siteName={resource.siteName ? resource.siteName : ''}
            image={resource.image ? resource.image : ''}
          />
        ))}
      </DivFlex>
    </React.Fragment>
  )
}
