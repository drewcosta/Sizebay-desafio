import { ChangeEvent, useState } from "react";
import * as S from "./NewTask.styles";
import { ModalInputText } from "../Inputs";
import { ModalButton } from "../Button";
import { NewTaskProps } from "./INewTask";
import { toast } from "sonner";
import { FaPlusCircle } from "react-icons/fa"

export function ModalNewTask({ onCreateTask }: NewTaskProps) {

  const [content, setContent] = useState('');

  const handleCreateTask = () => {
    if (content.trim() !== "") {
      onCreateTask(content);
      setContent('');
      toast.success('Tarefa criada com sucesso!');
    } else {
      toast.error('Digite um título para a sua tarefa!');
    }
  };

  function changeTitle(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value)
  }

  return (
    <S.NewTaskWrapper>
      <ModalInputText
        placeholder="add new task..."
        value={content}
        onChange={changeTitle}
        aria-label="New Task"
      />

      <ModalButton
        onClick={handleCreateTask}
        icon={<FaPlusCircle />}
        $addButton
      />
    </S.NewTaskWrapper>
  )
}