import * as S from "./FilterBar.styles";
import { ModalButton } from "../Button";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
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
          <li key={index}>
            <ModalButton
              onClick={() => setCurrentStatus(status)}
              $clicked={currentStatus === status}
              $filterButton
              icon={currentStatus === status ? <FaCheck /> : undefined}
            >
              {status}
            </ModalButton>
          </li>
        ))}
      </S.FilterButtonsBox>

      <S.InputBox>

        <ModalInputText
          type="text"
          placeholder="Search items..."
          value={searchTask}
          onChange={(e) => setSearchTask(e.target.value)}
          aria-label="Search"
        />

        <ModalButton
          icon={searchTask ? <IoMdClose /> : <FaSearch />}
          onClick={() => searchTask && removeFilters()}
          $searchButton
        />

      </S.InputBox>

    </S.Container>
  )
}