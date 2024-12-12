import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  z-index: 1000;
  width: 90%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #d9d9d9;
  position: sticky;
  top: 0;
`;

export const HeaderLogo = styled(Link)`
  display: flex;

  > img {
    width: 125px;
    height: 41px;
  }
`;