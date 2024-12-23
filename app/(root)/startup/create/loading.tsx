import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="animate-ping rounded-full w-20 h-20 border-2 border-primary"></div>
    </div>
  );
};

export default loading;
