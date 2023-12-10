import styled from "styled-components";
import { ModalButton } from "./ModalButton";
import { FaSearch } from "react-icons/fa";
import { TaskStatus } from "../../types/TaskStatus";
import { useFilterTasks } from "../../hooks/useFilterTasks";

export const ModalFilterBar = () => {
  const { currentStatus, setCurrentStatus } = useFilterTasks();

  const TaskStatusValues = Object.values(TaskStatus);

  return (
    <Container>
      <FilterTask>
        {TaskStatusValues.map((status, index) =>(
          <FilterTaskStatus
            key={index}
            checked={currentStatus === status}
            onClick={() => setCurrentStatus(status)}
          >
            {status}
          </FilterTaskStatus>
        ))}
    
      </FilterTask>

      <SearchTask>
        <InputText
          type="text"
          placeholder="Search items..."
        />

        <ModalButton 
          icon={<FaSearch />}
          background="var(--bg-modal-background)"
          colorIcon="var(--grey-text-color)"
        />
      </SearchTask>

    </Container>
  )
}

interface PropsStyles{
  checked: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;

  width: 100%;
  height: 100%;
  max-width: 680px;
  max-height: 40px;
`

const FilterTask = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const FilterTaskStatus = styled.li<PropsStyles>`
  list-style: none;
  padding: 8px 16px;

  color: ${(props) => props.checked ? 'var(--turquesa-color)' : 'var(--grey-text-color)'};
  border: 1px solid ${(props) => props.checked ? 'var(--turquesa-color)' : 'var(--border-input-color)'};
  border-radius: 20px;

  font-size: 14px;
  text-transform: capitalize;

  cursor: pointer;
`

const SearchTask = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const InputText = styled.input`
  padding: 10px 16px;
  width: 100%;
  height: 100%;
  max-width: 450px;
  
  background: var(--bg-modal-color);
  border-radius: 4px;

  font-size: 14px;
`

