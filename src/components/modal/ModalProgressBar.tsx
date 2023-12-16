import styled from "styled-components"
import { useEffect, useState } from "react";
import { useCrud } from "../../hooks/useTaskCrud";

export const ModalProgressBar = () => {
  const { tasks } = useCrud();
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const tasksDone = tasks.filter(task => task.status === 'done');
    const newProgressPercentage = tasks.length > 0 ? (tasksDone.length / tasks.length) * 100 : 0;
    setProgressPercentage(newProgressPercentage);
  }, [tasks, progressPercentage]);
  
  console.log(progressPercentage);

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