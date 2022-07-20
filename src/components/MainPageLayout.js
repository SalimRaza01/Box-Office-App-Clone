import React from 'react';
import Navs from './Navs';
import Title from './Title';
import logo from '../images/Mylogo.png';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <Title
        title="Box Office"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
