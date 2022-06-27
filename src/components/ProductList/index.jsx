import React from "react";
import { formatPrice } from "../../utils/formatPrice";

import * as S from "./styled";

const ProductList = ({ data }) => {
  
  if (!data) return null
  
  return (
    <S.ProductListWrapper>
      {data.map((product) => (
        <S.ProductListContent key={product.id}>
          <S.ProductImage src={product.imageUrl} alt={product.name} />
          <S.ProductInfo>
            <S.ProductTitle>{product.name}</S.ProductTitle>
            <S.ProductFullPrice>R$ {formatPrice(product.price)}</S.ProductFullPrice>
            <S.ProductDiscountPrice>R$ {formatPrice(product.sellingPrice)}</S.ProductDiscountPrice>
          </S.ProductInfo>
        </S.ProductListContent>
      ))}
    </S.ProductListWrapper>
  );
};

export default ProductList;