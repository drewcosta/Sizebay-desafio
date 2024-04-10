import * as S from './NoResults.styles'
import { NoResultsProps } from './INoResults';

export function NoResults({ removeFilters }: NoResultsProps) {
  return (
    <S.Container>
      <p> Nenhum item encontrado. <span onClick={removeFilters}>Remova o filtro aqui</span> para ver todos os itens.</p>
    </S.Container>
  );
}

