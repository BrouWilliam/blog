import React from 'react'
import links from './content'
import Icons from "./Icons"
import * as S from './styled'

const About = () => (

    <S.AboutWrapper>
        <S.AboutContent>
            <S.AboutTitle>William Pereira</S.AboutTitle>
            <S.AboutPosition>Desenvolvedor FrontEnd</S.AboutPosition>
            <S.AboutBtn>
                <S.AboutButton href={`https://williamportfolio.com.br`} title="Conheça meu portfólio" target="_blank" rel="noopener noreferrer">Conheça meu portfólio</S.AboutButton>
            </S.AboutBtn>
            <S.AboutSocialList>
                <S.AboutLinksList>
                    {links.map((link, i) => {
                        const Icon = Icons[link.label]

                        return(
                            <S.AboutLinksItem key={i}>
                                <S.AboutLinksLink 
                                    href={link.url}
                                    title={link.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <S.IconWrapper>
                                        <Icon />
                                    </S.IconWrapper>
                                </S.AboutLinksLink>
                            </S.AboutLinksItem>
                        )
                    })}
                    
                    
                </S.AboutLinksList>
            </S.AboutSocialList>
            </S.AboutContent>
    </S.AboutWrapper>
)

export default About