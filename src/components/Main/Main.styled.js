import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: 1px solid rgba(151, 210, 139, 1);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 65px;

    margin-bottom: 16px;
  }
`;
export const Development = styled.p`
  margin-bottom: 24px;

  font-family: var(--main-font);
  font-style: normal;
  font-size: 16px;
  line-height: calc(19.2 / 16);

  @media screen and (min-width: 768px) {
    width: 324px;

    margin-bottom: 43px;
  }
`;

export const Container = styled.div`
  padding-top: 110px;
 padding-bottom: 36px;

  h1 {
    margin-bottom: 24px;

    font-family: var(--title-font);
    font-style: normal;
    font-size: 36px;
    line-height: calc(36 / 36);

    @media screen and (min-width: 768px) {
     

      font-size: 51px;
      line-height: calc(51 / 51);
    }

    @media screen and (min-width: 1280px) {
      font-size: 64px;
      line-height: calc(64 / 64);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    width: 289px;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 36px;

    font-family: var(--main-font);
    font-style: normal;
    font-size: 14px;
    line-height: calc(19 / 14);

    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width: 100%;

      margin-left: 0;
      margin-right: 0;
      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: 128px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 164px;
  }


`;

export const Eco = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;

    margin-bottom: 0px;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;
