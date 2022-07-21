import React from 'react/cjs/react.development';
import Navs from './Navs';
import Title from './Title';
import Mylogo from '../images/Mylogo.png';

const MainPageLayout = ({ children }) => {
  return (
    <div id="display_image" align="center">
      <img src={Mylogo} alt="Mylogo" />
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
