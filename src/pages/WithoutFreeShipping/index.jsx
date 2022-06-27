import React from "react";
import ProductList from "../../components/ProductList";
import MinicartTitle from "../../components/MinicartTitle";
import BottomContent from "../../components/BottomContent";
import { useWithoutFreeShipping } from "../../context/WithoutFreeShippingProvider";

import * as S from "./styled";

const WithoutFreeShipping = () => {
  const productsInfo = useWithoutFreeShipping();

  return (
    <S.WithoutFreeShippingCart>
      <MinicartTitle />
      <ProductList data={productsInfo.data.items} />
      <BottomContent data={productsInfo.data.value}/>
    </S.WithoutFreeShippingCart>
  );
};

export default WithoutFreeShipping;