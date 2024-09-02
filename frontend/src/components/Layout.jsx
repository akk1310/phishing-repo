import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout absolute inset-0 -z-11 min-h-screen h-screen w-full bg-blue-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      {children}
    </div>
  );
};

export default Layout;
