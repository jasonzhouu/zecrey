/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import CardWrap from '@/components/common/card-wrap'
import Icon from '@/components/common/Icon'
import Communtity from '@/components/Communtity/Communtity'
import Layout from '@/components/layout'
import Partners from '@/components/Partners/Partners'
import ZecreyMobile from '@/components/Zecreymobile/ZecreyMobile'
import ZecreyWebApp from '@/components/Zecreywebapp/ZecreyWebApp'
import RoadMap from '@/components/roadmap'
import dynamic from 'next/dynamic'

const Landing = dynamic(() => import('@/components/landing'), { ssr: false })
const Privacy = dynamic(() => import('@/components/Privacy/Privacy'), {
  ssr: false
})
const CentralHub = dynamic(() => import('@/components/central-hub'), {
  ssr: false
})
const MultiPurpose = dynamic(() => import('@/components/multi-purpose'), {
  ssr: false
})
const MultiLayerEcosystem = dynamic(
  () => import('@/components/multi-layer-ecosystem'),
  { ssr: false }
)
const WalletDownload = dynamic(
  () => import('@/components/Walletdownload/WalletDownload'),
  { ssr: false }
)
const Footer = dynamic(() => import('@/components/footer'), { ssr: false })

export default function Home() {
  return (
    <Layout>
      <Landing />
      <Privacy />
      <CentralHub />
      <MultiPurpose />
      <MultiLayerEcosystem />
      <WalletDownload />
      <ZecreyWebApp />
      <ZecreyMobile />
      <Partners />
      {/* <CardWrap
        title='Roadmap'
        backgroundIcon={{
          svg: <Icon name='roadmap' />,
          size: { width: '29rem', height: '25.3rem' }
        }}
        text={[
          `The Zecrey roadmap indicates our major milestones, including a summary of Zecrey development, a set of functionalities to be delivered.`
        ]}>
      </CardWrap> */}
      <RoadMap />
      <Communtity id='join' />
      <Footer dark={true} />
    </Layout>
  )
}
