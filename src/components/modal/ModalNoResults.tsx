import styled from "styled-components";
import { useFilterTasks } from "../../hooks/useFilterTasks";

export const ModalNoResults = () => {

  const { setCurrentStatus, setSearchTask } = useFilterTasks();

  function removeFilterStatus(){
    setCurrentStatus('');
    setSearchTask('');
  }

  return (
    <Container>
      <p> Nenhum item encontrado. <span onClick={removeFilterStatus}>Remova o filtro aqui</span> para ver todos os itens.</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  p{
    font-size: 14px;
    line-height: 19px;
  }

  span{
    text-decoration: underline;
    cursor: pointer;
  }
`

