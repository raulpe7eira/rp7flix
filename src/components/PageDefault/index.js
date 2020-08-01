import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5%;

  ${({ inheritColor }) => inheritColor && css`
    background-color: inherit;
  `}

  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;

function PageDefault({ children, inheritColor, paddingAll }) {
  return (
    <>
      <Menu />
      <Main
        inheritColor={inheritColor}
        paddingAll={paddingAll}
      >
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
