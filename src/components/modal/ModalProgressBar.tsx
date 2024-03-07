import styled from "styled-components"
import { Task } from "../../types/Task"

interface Props{
  tasks: Task[]
}

export const ModalProgressBar = ({ tasks }: Props) => {
  const tasksDone = tasks.filter(task => task.status === 'done');
  const progressPercentage = tasks.length > 0 ? (tasksDone.length / tasks.length) * 100 : 0;

  return (
    <ProgressBar>
      <ProgressBarPercentage percentage={progressPercentage} />
    </ProgressBar>
  )
}

interface StylesProps {
  percentage: number;
}

const ProgressBar = styled.div`
  width: 100%;
  height: 24px;
  background: var(--bg-progress-bar-color);
  border-radius: 4px;
`
const ProgressBarPercentage = styled.div<StylesProps>`
  width: ${props => props.percentage}%;
  height: 24px;
  background: var(--green-color);
  border-radius: 4px;
`