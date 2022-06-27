import React from "react";
import { formatPrice } from "../../utils/formatPrice";

import * as S from "./styled";

const BottomContent = ({ data }) => {
  const isGreater = data > 1000;

  if (!data) return null

  return (
    <S.BottomContent>
      <S.TotalPriceWrapper>
        <span>Total</span>
        <span>R$ {formatPrice(data)}</span>
      </S.TotalPriceWrapper>
      {isGreater && (
        <S.FreeShippingMessage>
          Parabéns, sua compra tem frete grátis !
        </S.FreeShippingMessage>
      )}

      <S.FinishPurchaseWrapper>
        <S.FinishPurchaseContent type="button">
          Finalizar compra
        </S.FinishPurchaseContent>
      </S.FinishPurchaseWrapper>
    </S.BottomContent>
  )
}

export default BottomContent;
