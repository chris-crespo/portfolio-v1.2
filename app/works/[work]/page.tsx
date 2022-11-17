'use client'

import styled from "styled-components"
import works from 'assets/json/works.json'
import { notFound, usePathname } from "next/navigation"
import Title from "routes/works/routes/work/components/Title"
import Image from "routes/works/routes/work/components/Image"
import Info from "routes/works/routes/work/components/Info"
import { Work } from "types"

const Wrapper = styled.div`
  background-color: #e2e2e2;
  min-height: 100vh;
  padding-top: .01px;
`

const Page: React.FC = () => {
  const pathname = usePathname()
  const [, , slug] = pathname.split('/')
  const work = works.find(work => work.slug === slug)

  if (!work) notFound()

  return (
    <Wrapper>
      <Title text={work?.title ?? ''} />
      <Image />
      <Info work={work as Work} />
    </Wrapper>
  )
}

export default Page
