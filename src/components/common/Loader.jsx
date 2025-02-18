import React from 'react';

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-t-4 border-transparent border-blue-400 rounded-full animate-spin"></div>
        <div className="absolute inset-4 border-4 border-blue-400 rounded-full"></div>
        <div className="absolute w-4 h-4 bg-blue-400 rounded-full inset-center"></div>
      </div>
    </div>
  );
};

export default Loader;
