import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colors.secondary};
  padding-top: 30px;
`;

export const FooterTop = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 50px 0;
`;

export const FooterTopBloc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > h2 {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.white};
  }

  > ul {
    display: flex;
    flex-direction: column;
    line-height: 2.4;
    margin-top: 16px;

    > li {
      display: flex;

      > a {
        color: ${({ theme }) => theme.colors.white};
        padding: 4px 0;
      }
    }
  }
`;

export const FooterBottom = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid hsl(0, 0%, 20%);
  padding: 24px 0;
`;

export const FooterBottomBloc = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  > p {
    color: ${({ theme }) => theme.colors.white};
  }

  > ul {
    display: flex;
    align-items: center;
    gap: 8px;

    > li {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
