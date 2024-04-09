import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  max-width: 680px;
  max-height: 79px;
`

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const MonthDay = styled.h1`
  font-size: ${props => props.theme.fontSizes.text_6xl};
`

export const MonthAndYear = styled.h2`
  display: flex;
  flex-direction: column;

  font-size: ${props => props.theme.fontSizes.text_xl};
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  text-transform: capitalize;

  & > span:nth-child(2){
    font-weight: 300;
  }
`

export const WeekDay = styled.p`
  font-size: ${props => props.theme.fontSizes.text_xl};
  font-style: normal;
  font-weight: normal;
  text-transform: capitalize;
`
