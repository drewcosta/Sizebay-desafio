import * as S from "./FilterBar.styles";
import { ModalButton } from "../Button";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { TaskStatus } from "../../../types/TaskStatus";
import { useFilterTasks } from "../../../hooks/useFilterTasks";
import { ModalInputText } from "../Inputs";

export const ModalFilterBar = () => {
  const { currentStatus, setCurrentStatus, searchTask, setSearchTask, removeFilters } = useFilterTasks();
  
  const TaskStatusValues = Object.values(TaskStatus);

  return (
    <S.Container>

      <S.FilterButtonsBox>

        {TaskStatusValues.map((status, index) => (
          <ModalButton
            key={index}
            onClick={() => setCurrentStatus(status)}
            $clicked={currentStatus === status}
            $filterButton
          >
            {status}
          </ModalButton>
        ))}

      </S.FilterButtonsBox>

      <S.InputBox>

        <ModalInputText
          type="text"
          placeholder="Search items..."
          value={searchTask}
          onChange={(e) => setSearchTask(e.target.value)}
        />

        <ModalButton
          icon={searchTask ? <IoMdClose /> : <FaSearch />}
          onClick={() => searchTask && removeFilters()}
        />
        
      </S.InputBox>

    </S.Container>
  )
}