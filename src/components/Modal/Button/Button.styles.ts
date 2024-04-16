import styled, { css } from "styled-components";
import { ButtonStyles } from "./Button.types";

export const Button = styled.button<ButtonStyles>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: none;
  cursor: pointer;

  & + button{
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  ${({ $searchButton }) =>
    $searchButton &&
    css`
      background-color: ${({ theme }) => theme.colors.whiteBasic};

      & > svg{
        color: ${({ theme }) => theme.colors.grayMiddle};
        width: 13px;
        height: 14px;
      }
    `
  }

  ${({ $addButton }) =>
    $addButton &&
    css`
      background-color: ${({ theme }) => theme.colors.turquesaAddItem};

      & > svg{
        color: ${({ theme }) => theme.colors.whiteBasic};
      }
    `
  }

  ${({ $doneButton }) =>
    $doneButton &&
    css`
      background-color: ${({ theme }) => theme.colors.greenDoneItem};

      & > svg{
        color: ${({ theme }) => theme.colors.whiteBasic};
      }
    `
  }

  ${({ $excludeButton }) =>
    $excludeButton &&
    css`
      background-color: ${({ theme }) => theme.colors.redExcludeButton};

      & > svg{
        color: ${({ theme }) => theme.colors.whiteBasic};
      }
    `
  }

  ${({ theme, $clicked, $filterButton }) =>
    $filterButton &&
    css`
      color: ${$clicked ? theme.colors.turquesaAddItem : theme.colors.grayMiddle};
      background-color: ${$clicked ? theme.colors.grayBackgroundButton : theme.colors.whiteBasic};
      border: 1px solid ${$clicked ? theme.colors.turquesaAddItem : theme.colors.grayBackgroundItem}};
      border-radius: 20px;
      
      padding: 8px 16px;
      gap: 6px;
  
      font-size: ${(({ theme }) => theme.fontSizes.text_sm)};
      font-weight: normal;
      line-height: 19px;
      text-transform: capitalize;

      & > svg{
        color: ${({ theme }) => theme.colors.turquesaAddItem};
        width: 12px;
        height: 9px;
      }
    `
  }
`
