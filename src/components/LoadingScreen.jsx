import React from 'react';
import '../css/LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
       <div className="moon"></div>
       <div className="moonit">
        <h2>MoonIT</h2>
       </div>
    </div>
  );
};

export default LoadingScreen;