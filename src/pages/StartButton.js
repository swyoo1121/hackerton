import React   from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const SIZES = {
  sm: css`
      --button-font-size: 20px;
      --button-padding: 8px 12px;
      --button-radius: 4px;
    `,
  md: css`
      --button-font-size: 30px;
      --button-padding: 12px 16px;
      --button-radius: 8px;
    `,
  lg: css`
      --button-font-size: 40px;
      --button-padding: 16px 20px;
      --button-radius: 12px;
    `,
};

const VARIANTS = {
  success: css`
      --button-color: #ffffff;
      --button-bg-color: #28a745;
      --button-hover-bg-color: #218838;
    `,
  error: css`
      --button-color: #ffffff;
      --button-bg-color: #dc3545;
      --button-hover-bg-color: #c82333;
    `,
  warning: css`
      --button-color: #212529;
      --button-bg-color: #ffc107;
      --button-hover-bg-color: #e0a800;
    `,
};

const ButtonGroup = styled.div`
  display: flex;
  margin-right: 10px;
`

function StartButton({ disabled, size, variant, children }) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <ButtonGroup>
      <Link to='/login'>
        <StyledButton
          disabled={disabled}
          sizeStyle={sizeStyle}
          variantStyle={variantStyle}
        >
          {children} 카카오로 로그인하기
        </StyledButton>
      </Link>

      <Link to='/main'>
      <StyledButton
        disabled={disabled}
        sizeStyle={sizeStyle}
        variantStyle={variantStyle}
      >
        {children} 비회원으로 계속보기
      </StyledButton>
      </Link>
    </ButtonGroup>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  border: none;
  cursor: pointer;
  width: 500px;
  height: 100px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 32px;
  font-weight: bold;
  padding: var(--button-padding, 12px 16px);
  background: var(--button-bg-color, #000000);
  color: var(--button-color, #ffffff);
  margin-inline: 10px;

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #025ce2);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

export default StartButton;