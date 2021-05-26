import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import Img from './img'
import { px2vw } from '@/utils'

const icons = [
  {
    name: '1loopring',
    image: '/section5/1loopring.png'
  },
  {
    name: '2bybit',
    image: '/section5/2bybit.png'
  },
  {
    name: '3hackerfund',
    image: '/section5/3hackerfund.png'
  },
  {
    name: '4block0',
    image: '/section5/4block0.png'
  },
  {
    name: '5cmccglobal',
    image: '/section5/5cmccglobal.png'
  },
  {
    name: '6stakecapital',
    image: '/section5/6stakecapital.png'
  },
  {
    name: '7dorahacks',
    image: '/section5/7dorahacks.png'
  },
  {
    name: '8crasolum',
    image: '/section5/8crasolum.png'
  }
]

const Style = styled.div`
  padding: ${px2vw(90, 1437)} ${px2vw(201, 1437)} ${px2vw(200, 1437)}
    ${px2vw(201, 1437)};
  h2 {
    font-family: Lexend;
    font-style: normal;
    font-weight: bold;
    font-size: ${px2vw(48, 1437)};
    line-height: ${px2vw(60, 1437)};
    text-align: center;
    color: #ffffff;
    margin-bottom: ${px2vw(30, 1437)};
  }
  p {
    font-family: Lexend;
    font-style: normal;
    font-weight: 500;
    font-size: ${px2vw(24, 1437)};
    line-height: ${px2vw(30, 1437)};
    text-align: center;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-bottom: ${px2vw(90, 1437)};
  }
  div.icons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    img {
      margin-bottom: ${px2vw(101, 1437)};
      width: auto;
      &:nth-of-type(1) {
        height: ${px2vw(56, 1437)};
        margin-right: ${px2vw(79, 1437)};
      }
      &:nth-of-type(2) {
        height: ${px2vw(70, 1437)};
        margin-right: ${px2vw(79, 1437)};
      }
      &:nth-of-type(3) {
        height: ${px2vw(63, 1437)};
        margin-right: ${px2vw(79, 1437)};
      }
      &:nth-of-type(4) {
        height: ${px2vw(59, 1437)};
      }
      &:nth-of-type(5) {
        height: ${px2vw(38, 1437)};
        margin-right: ${px2vw(96, 1437)};
      }
      &:nth-of-type(6) {
        height: ${px2vw(71, 1437)};
        margin-right: ${px2vw(96, 1437)};
      }
      &:nth-of-type(7) {
        height: ${px2vw(70, 1437)};
      }
      &:nth-of-type(8) {
        height: ${px2vw(43, 1437)};
      }
    }
  }
  @media (max-width: 760px) {
    padding: ${px2vw(10, 320)} ${px2vw(45, 320)} 0 ${px2vw(50, 320)};
    h2 {
      font-family: Lexend;
      font-style: normal;
      font-weight: bold;
      font-size: ${px2vw(26, 320)};
      line-height: 32px;
      text-align: center;
      color: #ffffff;
      margin-bottom: ${px2vw(10, 320)};
    }
    p {
      font-family: Lexend;
      font-size: ${px2vw(10, 320)};
      line-height: ${px2vw(12, 320)};
      text-align: center;
      color: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.6;
      margin-bottom: ${px2vw(30, 320)};
    }
    div.icons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      img {
        margin-bottom: ${px2vw(23, 320)};
        width: auto;
        &:nth-of-type(1) {
          height: ${px2vw(18, 320)};
          margin-right: ${px2vw(19, 320)};
        }
        &:nth-of-type(2) {
          height: ${px2vw(18, 320)};
          margin-right: ${px2vw(19, 320)};
        }
        &:nth-of-type(3) {
          height: ${px2vw(18, 320)};
        }
        &:nth-of-type(4) {
          height: ${px2vw(20, 320)};
          margin-right: ${px2vw(20, 320)};
        }
        &:nth-of-type(5) {
          height: ${px2vw(13, 320)};
        }
        &:nth-of-type(6) {
          height: ${px2vw(16, 320)};
          margin-right: ${px2vw(0, 320)};
        }
        &:nth-of-type(7) {
          height: ${px2vw(16, 320)};
          margin-right: ${px2vw(0, 320)};
        }
        &:nth-of-type(8) {
          height: ${px2vw(16, 320)};
        }
      }
    }
  }
`

export const Section5 = observer(() => {
  const store = useStore()
  return (
    <Style>
      <h2>Partners</h2>
      <p>Cooperate with us and become the forethinkers in the privacy world.</p>
      <div className='icons'>
        {icons.map((icon, index) => (
          <Img src={icon.image} key={icon.name} />
        ))}
      </div>
    </Style>
  )
})
