import styled from "styled-components"

export const ModalProgressBar = () => {
  return <ProgressBar />
}

const ProgressBar = styled.div`
  width: 100%;
  height: 24px;
  background: var(--bg-progress-bar-color);
  border-radius: 4px;
`