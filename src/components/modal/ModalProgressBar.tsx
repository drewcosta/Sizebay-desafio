import styled from "styled-components"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { Task } from "../../types/Task";
import { useEffect, useState } from "react";

export const ModalProgressBar = () => {
  const { value: tasks, updateLocalStorage } = useLocalStorage<Task[]>('tasks-list', []);
  const [progressPercentage, setProgressPercentage] = useState(0)
  console.log("Current tasks:", tasks);

  useEffect(() => {
    console.log("useEffect is running");
    const tasksDone = tasks.filter(task => task.status === 'done');
    const progressPercentage = tasksDone.length > 0 ? (tasksDone.length / tasks.length) * 100 : 0;
    setProgressPercentage(progressPercentage)
  }, [tasks])

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