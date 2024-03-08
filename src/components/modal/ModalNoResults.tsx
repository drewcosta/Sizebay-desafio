import styled from "styled-components";
import { useFilterTasks } from "../../hooks/useFilterTasks";

export const ModalNoResults = () => {
  const { removeFilters } = useFilterTasks();

  return (
    <Container>
      <p> Nenhum item encontrado. <span onClick={removeFilters}>Remova o filtro aqui</span> para ver todos os itens.</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  p{
    font-size: ${props => props.theme.fontSizes.text_sm};
    line-height: 19px;
  }

  span{
    text-decoration: underline;
    cursor: pointer;
  }
`

