import styled from "styled-components";
import { formattedDate } from "../../utils/FormatDate";

export const ModalHeader = () => {
  return (
    <Container>
      <DateDatails>
        <Day>{formattedDate.day}</Day>
        <DateMonthYear>
          <span>{formattedDate.month}</span>
          <span>{formattedDate.year}</span>
        </DateMonthYear>
      </DateDatails>
      <WeekDay>{formattedDate.weekday}</WeekDay>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  max-width: 680px;
  max-height: 79px;
`

const DateDatails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Day = styled.h1`
  font-size: 60px;
`

const DateMonthYear = styled.h2`
  display: flex;
  flex-direction: column;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  text-transform: capitalize;

  & > span:nth-child(2){
    font-weight: 300;
  }
`

const WeekDay = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: normal;
  text-transform: capitalize;
`

