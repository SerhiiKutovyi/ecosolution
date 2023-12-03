import styled from 'styled-components';

export const Tel = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;
export const Container = styled.div`
  p {
    margin-bottom: 8px;
  }

  a {
    display: flex;
    gap: 8px;

    margin-bottom: 24px;
  }
`;

export const ContactUsTitle = styled.h2`
  text-align: center;
  margin-bottom: 24px;

  font-family: var(--title-font);
  font-style: normal;
  font-size: 28px;
  line-height: calc(28 / 28);
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