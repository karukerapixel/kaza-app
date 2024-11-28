import styled from 'styled-components';

export const SearchBarWrapper = styled.form`
  width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr) 120px;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 4px 8px hsl(0, 0%, 0%, 0.15);
  padding: 8px 16px;
  grid-gap: 12px;
`;

export const SearchBarBloc = styled.div`
  width: 231px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  padding: 8px 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgrey};
  }

  > span,
  > label {
    &:nth-child(1) {
      font-weight: 600;
    }
  }

  > span,
  > input {
    &:nth-child(2) {
      font-weight: 400;
      color: #aba8a8;
      background-color: transparent;
      border: none;
      outline: none;
    }
  }
`;

export const SearchBarSubmit = styled.input`
  width: 100%;
  height: 60px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 8px 16px;
`;
