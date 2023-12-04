import styled from "styled-components";
import { formattedDate } from "../../utils/format-date";

export const HeaderModal = () => {
  return (
    <HeaderModalContainer>

      <HeaderDate>
        <HeaderDateDay>{formattedDate.day}</HeaderDateDay>
        <HeaderDateText>
          <span>{formattedDate.month}</span>
          <span>{formattedDate.year}</span>
        </HeaderDateText>
      </HeaderDate>

      <HeaderWeekDay>
        <HeaderWeekDayText>{formattedDate.weekday}</HeaderWeekDayText>
      </HeaderWeekDay>

    </HeaderModalContainer>
  );
}

const HeaderModalContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 680px;
  min-height: 79px;
  max-height: 100%;
  max-width: 100%;
`

const HeaderDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const HeaderDateDay = styled.h1`
  font-size: 60px;
`

const HeaderDateText = styled.h2`
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

const HeaderWeekDay = styled.div``

const HeaderWeekDayText = styled.p`
  text-transform: capitalize;
`

