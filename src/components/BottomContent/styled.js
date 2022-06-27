import styled from "styled-components";
import { rem } from "polished";

export const BottomContent = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  
  @media (min-width: 486px) {
    border-radius: 0 0 20px 20px;
  }
`; 

export const TotalPriceWrapper = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: ${rem(20)};
  line-height: ${rem(28)};
  height: ${rem(72)};
  color: #000000;
  border-top: 1px solid #c2c2c2;
  padding: 0 ${rem(16)};
`;

export const FreeShippingMessage = styled.p`
  color: rgb(24, 153, 0);
  background-color: rgb(49, 197, 22, 0.3);
  font-size: ${rem(16)};
  font-weight: 500;
  line-height: ${rem(32)};
  border-radius: 20px;
  width: fit-content;
  margin: 0 auto;
  display: block;
  padding: 0 ${rem(16)};
  margin-bottom: ${rem(16)};
`;

export const FinishPurchaseWrapper = styled.div`
  display: block;
  padding: ${rem(20)} ${rem(16)};
  height: ${rem(110)};
  border-top: 1px solid #c2c2c2;
`;

export const FinishPurchaseContent = styled.button`
  display: block;
  height: ${rem(70)};
  color: #ffffff;
  width: 100%;
  background-color: #281ac7;
  border-radius: ${rem(20)};
  font-size: ${rem(24)};
  line-height: ${rem(30)};
  font-weight: 700;
  cursor: pointer;
`;