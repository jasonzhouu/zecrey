import classNames from 'classnames'
import { useEffect, useState } from 'react'
import Icon from '../common/Icon'
import { isSafari } from 'react-device-detect'
import {
  Bottom,
  Box,
  Img,
  Label,
  MobileWrap,
  Text,
  Text2,
  Video,
  Wrap
} from './styles'
import { useMediaQuery } from 'react-responsive'

const Landing = () => {
  const isMobile = useMediaQuery({ maxWidth: 780 })
  useEffect(() => console.log('is mobile: ', isMobile), [isMobile])
  return isMobile ? <Mobile /> : <Desktop />
}

export default Landing

const Desktop = () => {
  useEffect(() => {
    setTimeout(() => {
      let body = document.querySelector('body')
      body.classList.add('enable-scroll')
    }, 5 * 1000)
  }, [])

  return (
    <Wrap className='landing'>
      <div className='container'>
        <Box>
          <Icon className='dots' name='dots' />
          <Icon className='logo' name='logo' />
        </Box>
        <Label>Zecrey Protocal</Label>
        <Text>
          A turn-key solution for Cross-chain and privacy
          {/* <Typing str='Bringing Cross-chain Privacy to Digital Assets.' /> */}
        </Text>
        <Text2>
          A turn-key, Layer 2 privacy solution for cross-chain transactions and
          asset management based on Zero-knowledge (zk) Roll-Ups. With Zecrey’s
          L2 protocol you can easily manage, swap and bridge assets across
          multiple chains, all while knowing your transactions are private and
          protected from malicious arbitrageurs.
        </Text2>
        {isSafari ? (
          <Img src='/Zecrey_3D_poster.png' alt='Zecrey_3D_poster' />
        ) : (
          <Video
            src='/Zecrey_3D.webm'
            autoPlay
            loop
            muted
            poster='/Zecrey_3D_poster.png'
            onContextMenu={e => e.preventDefault()}
          />
        )}
      </div>
      <Bottom>
        <div>Learn More</div>
        <Icon name='dart' />
      </Bottom>
    </Wrap>
  )
}

const Typing = (props: { str: string }) => {
  const [mutedFrom, setMutedFrom] = useState(0)

  useEffect(() => {
    let count = 0
    let timer = setInterval(() => {
      count++
      setMutedFrom(count)
      if (count >= props.str.length) {
        clearInterval(timer)
      }
    }, 80)
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [])

  return (
    <>
      {Array.from(props.str).map((i, index) => (
        <span key={index} className={classNames({ muted: index > mutedFrom })}>
          {i}
        </span>
      ))}
    </>
  )
}

const Mobile = () => {
  useEffect(() => {
    let body = document.querySelector('body')
    body.classList.add('enable-scroll')
  }, [])
  return (
    <MobileWrap className='landing-mobile'>
      <Box>
        <Text>A turn-key solution for Cross-chain and privacy</Text>
        <Text2>
          A turn-key, L2 privacy solution for cross-chain transactions and asset
          management based on Zero-knowledge (zk) Roll-Ups.
        </Text2>
        <Icon className='dots' name='dots' />
        <Icon className='logo' name='logo' />
        <Img src='/Zecrey_3D_poster.png' alt='Zecrey_3D_poster' />
      </Box>
      <Bottom>
        <div>Learn More</div>
        <Icon name='dart' />
      </Bottom>
    </MobileWrap>
  )
}
