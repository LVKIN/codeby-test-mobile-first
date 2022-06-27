import React from "react";
import ProductList from "../../components/ProductList";
import MinicartTitle from "../../components/MinicartTitle";
import BottomContent from "../../components/BottomContent";
import { useWithFreeShipping } from "../../context/WithFreeShippingProvider";

import * as S from "./styled";

const WithFreeShipping = () => {
  const productsInfo = useWithFreeShipping();

  return (
    <S.WithFreeShippingCart>
      <MinicartTitle />
      <ProductList data={productsInfo.data.items} />
      <BottomContent data={productsInfo.data.value}/>
    </S.WithFreeShippingCart>
  );
};

export default WithFreeShipping;