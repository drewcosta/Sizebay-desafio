import * as S from './NoResults.styles'
import { NoResultsProps } from './NoResults.types';

export function NoResults({ removeFilter, statusResult }: NoResultsProps) {
  if (statusResult === 'done') {
    return (
      <S.Container>
        <p> There are no items marked as done. <span onClick={removeFilter}>Clear the filter here</span> to see all items.</p>
      </S.Container>
    )
  }

  if (statusResult === 'pending') {
    return (
      <S.Container>
        <p> There are no items marked as pending. <span onClick={removeFilter}>Clear the filter here</span> to see all items.</p>
      </S.Container>
    )
  }

  return (
    <S.Container>
      <p> You search found no results. <span onClick={removeFilter}>Clear the search here</span> to see all items.</p>
    </S.Container>
  )


}

