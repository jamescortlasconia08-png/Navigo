import React from 'react';
import Header from '../components/user/Header';

const UserLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default UserLayout;
