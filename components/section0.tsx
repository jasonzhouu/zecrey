/*!
 * Copyright (C) 2020-present, Zecrey-Labs
 */

import styled from 'styled-components'
import { desktopPx2vw } from '@/utils'

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: Lexend;
    font-size: ${desktopPx2vw(60)};
    font-style: normal;
    font-weight: 800;
    line-height: ${desktopPx2vw(75)};
    letter-spacing: 0.7235293984413147px;
    text-align: left;
    background: linear-gradient(135deg, #00b6ba 0%, #53f8ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    margin-bottom: ${desktopPx2vw(22)};
  }
  h2 {
    font-family: Lexend;
    font-size: ${desktopPx2vw(28)};
    font-style: normal;
    font-weight: 600;
    line-height: ${desktopPx2vw(35)};
    letter-spacing: 0;
    text-align: center;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-bottom: ${desktopPx2vw(72)};
  }
  iframe {
    width: ${desktopPx2vw(1686)};
    height: ${desktopPx2vw(902)};
  }
`

export const Section0 = () => {
  return (
    <Styled>
      <h1>Feature Introduction</h1>
      <h2>know about Zecrey in 3 minutes</h2>
      <iframe
        src='https://www.youtube.com/embed/XSnlcXcO9QQ'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </Styled>
  )
}
