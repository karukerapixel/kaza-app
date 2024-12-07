import styled from 'styled-components';

export const GalleryWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 48px 0;
`;

export const GalleryList = styled.ul`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: min(350px);
  grid-gap: 24px;
`;

export const GalleryListItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  > a {
    width: 100%;
    height: 100%;

    > img {
      width: 100%;
      height: 75%;
      border-radius: 5px;
    }

    > h2 {
      text-transform: capitalize;
    }

    > p {
      font-weight: 400; 
      color: ${({theme}) => theme.colors.tertiary};
    }

    > span {
      font-weight: 700; 
    }
  }
`;
