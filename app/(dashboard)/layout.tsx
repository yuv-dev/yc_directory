import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (<div className="min-h-screen">
    {children}</div>);
};

export default layout;
