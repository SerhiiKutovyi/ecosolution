import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }
`;

export const Container = styled.div`
  p {
    margin-bottom: 8px;
  }

  a {
    display: flex;
    gap: 8px;

    margin-bottom: 24px;

    font-family: var(--main-font);
    font-style: normal;
    font-size: 20px;
    line-height: calc(24 / 20);
  }

  @media screen and (min-width: 768px) {
    width: 265px;
    height: 360px;
  }
`;

export const ContactUsTitle = styled.h2`
  text-align: center;
  margin-bottom: 24px;

  font-family: var(--title-font);
  font-style: normal;
  font-size: 28px;
  line-height: calc(28 / 28);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 36px;
    line-height: calc(36 / 36);
  }
`;

export const Tel = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;

  font-family: var(--main-font);
  font-style: normal;
  font-size: 20px;
  line-height: calc(24 / 20);
`;


export const Social = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Networks = styled.p`
  width: 100%;
`;
export const Img = styled.img`
  margin-right: 32px;
`;
