import styled from "styled-components";
import { rem } from "polished";

export const WithFreeShippingCart = styled.section`
  background-color: #ffffff;
  
  @media (min-width: 486px) {
    border-radius: ${rem(20)};
    overflow-y: auto;
    max-width: ${rem(640)};
    margin: 0 auto;
  }
`;