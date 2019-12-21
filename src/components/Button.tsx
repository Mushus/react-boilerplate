import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const Button = ({ children, onClick }: Props): React.ReactElement => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: #0080ff;
  padding: 12px 16px;
  border-radius: 2px;
  color: #fff;
`;

export default Button;
