import styled from "styled-components";
import { rem } from "polished";

export const WithoutFreeShippingCart = styled.section`
  background-color: #ffffff;
  border-radius: ${rem(20)};
  
  @media (min-width: 486px) {
  overflow-y: auto;
  max-width: ${rem(640)};
  margin: 0 auto;
}
`;