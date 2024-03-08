import styled from "styled-components";
import { ModalButton } from "./ModalButton";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { TaskStatus } from "../../types/TaskStatus";
import { useFilterTasks } from "../../hooks/useFilterTasks";

export const ModalFilterBar = () => {
  const { currentStatus, setCurrentStatus, searchTask, setSearchTask, removeFilters } = useFilterTasks();
  
  const TaskStatusValues = Object.values(TaskStatus);

  return (
    <Container>
      <FilterTask>
        {TaskStatusValues.map((status, index) => (
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
          value={searchTask}
          onChange={(e) => setSearchTask(e.target.value)}
        />

        <ModalButton
          icon={searchTask ? <IoMdClose /> : <FaSearch />}
          onClick={() => searchTask && removeFilters()}
        />
      </SearchTask>

    </Container>
  )
}

interface PropsStyles {
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

  @media (max-width: 425px){
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 10px;
  }
`

const FilterTask = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const FilterTaskStatus = styled.li<PropsStyles>`
  padding: 8px 16px;
  
  color: ${(props) => (props.checked ? props.theme.colors.turquesa : props.theme.colors.grey)};
  border: 1px solid ${(props) => (props.checked ? props.theme.colors.turquesa : props.theme.colors.border_input)};
  border-radius: 20px;
  
  font-size: ${(props) => props.theme.fontSizes.text_sm};
  text-transform: capitalize;
  list-style: none;

  cursor: pointer;
`

const SearchTask = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.border_input};
  border-radius: 4px;
`

const InputText = styled.input`
  padding: 10px 16px;
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 48px;
  
  background: ${props => props.theme.colors.white};
  border-radius: 4px;
`

