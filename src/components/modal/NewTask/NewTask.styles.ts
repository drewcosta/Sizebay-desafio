import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 100%;
max-width: 680px;
max-height: 50px;

border: 1px solid ${({theme}) => theme.colors.grayBackgroundButton};
border-radius: 4px;
`