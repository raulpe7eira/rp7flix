import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const PageDefaultWrapper = styled.body`
  background: var(--grayDark);
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5%;

  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <PageDefaultWrapper>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </PageDefaultWrapper>
  );
}

export default PageDefault;
