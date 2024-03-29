import React from 'react';
import Nav from './shared/Nav';
import Footer from './shared/Footer';

interface Props {
  children: any;
}

function Layout(props: Props) {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
