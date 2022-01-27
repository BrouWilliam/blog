import styled from "styled-components"

export const AboutWrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const AboutContent = styled.div`
    text-align: center;
`
export const AboutBtn = styled.div`
    margin: 50px 0;
`

export const AboutButton = styled.a`
    background:#f8476e;
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    border-radius: 10rem;
    color: #FFF;
    font-weight: 500;
`

export const AboutTitle = styled.h1`
    color: var(--postColor);
    font-size: 60px;
`

export const AboutPosition = styled.h4`
    font-weight: 100;
    color: var(--postColor);
    font-size: 24px;
    text-transform: uppercase;
`

export const AboutSocialList = styled.div`
    
`

export const AboutLinksList = styled.ul`
    padding: 0;
    display: flex;
    gap: 30px;
    text-align: center;
    justify-content: center;
    margin-top: 5rem;

`

export const AboutLinksItem = styled.li``

export const AboutLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`
export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
