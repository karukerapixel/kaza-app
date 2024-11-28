import styled from 'styled-components';

export const HousingContainer = styled.section`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 24px 0;

  > div {
    > h2 {
      font-size: 2rem;
    }

    > p {
      margin-bottom: 12px;
    }

    > ul {
      display: flex;
      gap: 12px;

      > li {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 5px;
        padding: 5px 10px;
      }
    }

    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;

export const HousingBloc = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HousingBlocLeft = styled(HousingBloc)`
  > h2 {
    font-size: 2rem;
  }

  > p {
    margin-bottom: 12px;
  }

  > ul {
    display: flex;
    gap: 12px;

    > li {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 5px;
      padding: 5px 10px;
    }
  }
`;

export const HousingBlocRight = styled(HousingBloc)`
  align-items: end;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;

export const HousingDropdowns = styled.section`
  width: 90%;
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;
