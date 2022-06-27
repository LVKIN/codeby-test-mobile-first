import React from "react";

import * as S from "./styled";

const Home = () => {

  return (
    <S.HomeWrapper>
      <S.HomeHeader>
        <S.HomeHeaderText>Seja Bem vindo!</S.HomeHeaderText>
      </S.HomeHeader>

      <S.HomeIntroductionWrapper>
        <S.HomeIntroductionText>
          Este teste foi desenvolvido para vaga de Front-end na Codeby. O desafio consiste na criação de um carrinho de compras
          listando os produtos a partir de uma API indicando se o usuário está apto a receber frete grátis. 
        </S.HomeIntroductionText>
        <S.HomeIntroductionText>
          Porém as condições são: o conceito e arquitetura do <strong>Mobile First</strong>, utilizar ReactJS e realizar sua
          hospedagem.
        </S.HomeIntroductionText>
        <S.HomeIntroductionText>
          As stacks utilizadas são o ReactJS, como mencionado antes, CSS-in-JS com o Styled-components, Polished para uso do rem 
          (especificação de tamanho relativo) e a Heroku como hospedagem. 
        </S.HomeIntroductionText>

      </S.HomeIntroductionWrapper>
      <S.HomeConclusion>
        Acesse as páginas do teste:
        <S.PageButtons>
          <S.LinkButton href="/com-frete-gratis" title="Com Frete Grátis">com frete grátis</S.LinkButton> 
          <S.LinkButton href="/sem-frete-gratis" title="Sem Frete Grátis">sem frete grátis</S.LinkButton> 
        </S.PageButtons>
      </S.HomeConclusion>
    </S.HomeWrapper>
  )
}

export default Home;