import styled from "styled-components";
import { formattedDate } from "../../utils/FormatDate";

export const ModalHeader = () => {
  return (
    <ModalHeaderContainer>

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

    </ModalHeaderContainer>
  );
}

const ModalHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  max-width: 680px;
  max-height: 79px;
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
  font-size: 24px;
  font-style: normal;
  font-weight: normal;
  text-transform: capitalize;
`

