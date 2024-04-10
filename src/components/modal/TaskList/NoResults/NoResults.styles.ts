import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  p{
    font-size: ${({ theme }) => theme.fontSizes.text_sm};
    line-height: 19px;
  }

  span{
    text-decoration: underline;
    cursor: pointer;
  }
`